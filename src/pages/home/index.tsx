import { useEffect, useMemo, useState, useCallback } from "react";
import { fetchCountries } from "../../api";
import CountryCard from "../../components/countryCard";
import Search from "../../components/search";
import Filter from "../../components/filter";
import { CountryDetails } from "../../types";
import Loader from "../../components/loader";
import ErrorHandling from "../../components/errorHandling";

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
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        setError(message);
      }
      setLoading(false);
    };

    loadCountries();
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleRegionChange = useCallback((region: string) => {
    setSelectedRegion(region);
  }, []);

  const uniqueRegions = useMemo(() => {
    const regions = new Set(countries.map((country) => country.region));
    return ["All", ...regions];
  }, [countries]);

  const filteredCountries = useMemo(() => {
    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedRegion === "All" || country.region === selectedRegion)
    );
  }, [countries, searchTerm, selectedRegion]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center mb-12">
        <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <Filter
          options={uniqueRegions}
          selectedRegion={selectedRegion}
          onSelectRegion={handleRegionChange}
        />
      </div>
      {loading && <Loader />}
      {error && <ErrorHandling errorMessage={error} />}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-15">
        {filteredCountries.map((country) => (
          <CountryCard key={country?.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
