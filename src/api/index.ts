/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosError } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchCountries = async (): Promise<any> => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca3"
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.message || "Failed to fetch countries");
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchCountryDetails = async (code: string): Promise<any> => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      axiosError.message || `Failed to fetch country details for code: ${code}`
    ); // Return empty array as fallback
  }
};

// Fetch the names of border countries
export const fetchBorderCountries = async (borders: string[]) => {
  try {
    const responses = await Promise.allSettled(
      borders?.map((border) =>
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      )
    );
    const borderCountryNames = responses
      .filter((result) => result.status === "fulfilled")
      .map((result: any) => result.value.json());

    // Wait for all fulfilled promises to resolve
    const countries = await Promise.all(borderCountryNames);

    return countries.map((country) => ({
      code: country[0].cca3, // Assuming country data is in the first index and code is stored under 'cca3'
      name: country[0].name.common,
    }));
  } catch (error) {
    throw new Error("Failed to fetch border countries");
  }
};
