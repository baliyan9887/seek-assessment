import { useEffect, useMemo, useState } from "react";
import { fetchCountries } from "../../api";
import CountryCard from "../../components/countryCard";
import Search from "../../components/search";
import Filter from "../../components/filter";
import { CountryDetails } from "../../types";

function Home() {
  const [countries, setCountries] = useState<CountryDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadCountries = async () => {
      setLoading(true);
      try {
        const allCountries = await fetchCountries();
        setCountries(allCountries);
      } catch (error: any) {
        setError(error?.message || "Unknown error");
      }
      setLoading(false);
    };

    loadCountries();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  // Extract and de-duplicate regions from the country list
  const uniqueRegions = useMemo(() => {
    const regions = new Set(countries.map((country) => country.region));
    return ["All", ...regions]; // Add "All" option to the beginning of the regions array
  }, [countries]);

  // Filtered countries based on search term and selected region
  const filteredCountries = useMemo(
    () =>
      countries
        .filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(
          (country) =>
            selectedRegion === "All" || country.region === selectedRegion
        ),
    [countries, searchTerm, selectedRegion]
  );

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center mb-12 ">
        <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <Filter
          options={uniqueRegions}
          selectedRegion={selectedRegion}
          onSelectRegion={handleRegionChange}
        />
      </div>
      {error && <p className="error-message">Error: {error}</p>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-15">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
      {loading && <p className="loading-message">Loading...</p>}
    </div>
  );
}

export default Home;
