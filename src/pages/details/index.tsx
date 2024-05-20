import React from "react";
import { useParams } from "react-router-dom";
import useCountryDetails from "../../hooks/useCountryDetails";
import CountryInfo from "../../components/countryInfo";
import Back from "../../components/back";

const CountryDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { countryDetails, countryInfo, borderCountries, loading, error } =
    useCountryDetails(id);

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <>
      <div className="mb-8">
        <Back />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-20">
        {countryDetails && (
          <>
            <div className="rounded-lg overflow-hidden">
              <img
                src={countryDetails.flags.png}
                alt={`${countryDetails.name.common} flag`}
                className="object-cover w-full h-full"
              />
            </div>
            <CountryInfo
              name={countryDetails?.name}
              countryInfo={countryInfo}
              borderCountries={borderCountries}
            />
          </>
        )}
      </div>
    </>
  );
};

export default CountryDetailsPage;
