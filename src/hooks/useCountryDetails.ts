/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback, useMemo } from "react";
import { fetchBorderCountries, fetchCountryDetails } from "../api";
import { formatIndianNumber } from "../utils";
import { CountryDetails } from "../types";

const useCountryDetails = (id: string) => {
  const [countryDetails, setCountryDetails] = useState<CountryDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    const loadCountryDetails = async () => {
      try {
        const countryData = await fetchCountryDetails(id);
        setCountryDetails(countryData[0]);

        if (countryData[0]?.borders) {
          const borderCountryNames = await fetchBorderCountries(
            countryData[0].borders
          );
          if (borderCountryNames) {
            setBorderCountries(borderCountryNames);
          }
        }
      } catch (error: any) {
        setError(error?.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    loadCountryDetails();
  }, [id]);

  const getNativeOfficialName = useCallback((nativeNames: any): string => {
    if (!nativeNames) return "N/A";
    const officialNames = Object.values(nativeNames).map(
      (name: any) => name.official
    );
    return officialNames.length > 0 ? officialNames[0] : "N/A";
  }, []);

  const getCurrencies = useCallback((currencies: any): string => {
    if (!currencies) return "N/A";
    return Object.values(currencies)
      .map((currency: any) => currency.name)
      .join(", ");
  }, []);

  const getLanguages = useCallback((languages: any): string => {
    if (!languages) return "N/A";
    return Object.values(languages).join(", ");
  }, []);

  const countryInfo = useMemo(() => {
    if (!countryDetails) return null;

    return {
      nativeName: getNativeOfficialName(countryDetails.name.nativeName),
      population: formatIndianNumber(countryDetails.population),
      region: countryDetails.region,
      subregion: countryDetails.subregion,
      capital: countryDetails.capital?.[0] || "N/A",
      tld: countryDetails.tld?.join(", ") || "N/A",
      currencies: getCurrencies(countryDetails.currencies),
      languages: getLanguages(countryDetails.languages),
    };
  }, [countryDetails, getNativeOfficialName, getCurrencies, getLanguages]);

  return { countryDetails, countryInfo, borderCountries, loading, error };
};

export default useCountryDetails;
