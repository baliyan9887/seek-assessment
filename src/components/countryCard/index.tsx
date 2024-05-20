import { useNavigate } from "react-router-dom";
import { formatIndianNumber } from "../../utils";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CountryCard({ country }: { country: any }) {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/details/${country?.cca3}`);
  };

  return (
    <div
      className="rounded-lg bg-secondaryLightBg dark:bg-secondaryDarkBg overflow-hidden shadow-lg cursor-pointer"
      onClick={navigateToDetails}
    >
      <div className="rounded-lg overflow-hidden  h-[250px]">
        <img
          src={country?.flags?.png}
          alt={`${country?.name?.common} flag`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black dark:text-white ">
          {country?.name?.official}
        </h3>
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
            <span className=" text-black dark:text-white">Population:</span>{" "}
            {formatIndianNumber(country?.population)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
            <span className="text-black dark:text-white">Region:</span>{" "}
            {country?.region}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
            <span className="text-black dark:text-white">Capital:</span>{" "}
            {country?.capital?.[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
