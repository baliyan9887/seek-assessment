import { useNavigate } from "react-router-dom";
import { CountryInfoProps } from "../../types";
const CountryInfo: React.FC<CountryInfoProps> = ({
  name,
  countryInfo,
  borderCountries,
}) => {
  const navigate = useNavigate();

  const navigateToDetails = (code: string) => {
    navigate(`/details/${code}`);
  };

  if (!countryInfo) return null;

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-[32px] font-bold mb-8 text-black dark:text-white">
        {name.official}
      </h1>
      <div className="flex items-start flex-col lg:flex-row">
        <div>
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className=" text-black dark:text-white">Native Name:</b>{" "}
            {countryInfo.nativeName}
          </p>
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className="text-black dark:text-white">Population:</b>{" "}
            {countryInfo.population}
          </p>
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className="text-black dark:text-white">Region:</b>{" "}
            {countryInfo.region}
          </p>
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className="text-black dark:text-white">Sub Region:</b>{" "}
            {countryInfo.subregion}
          </p>
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className="text-black dark:text-white">Capital:</b>{" "}
            {countryInfo.capital}
          </p>
        </div>
        <div className="ml-0 lg:ml-10">
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className="text-black dark:text-white">Top Level Domain:</b>{" "}
            {countryInfo.tld}
          </p>
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className="text-black dark:text-white">Currencies:</b>{" "}
            {countryInfo.currencies}
          </p>
          <p className="text-[16px] leading-8 lg:leading-10 text-gray-600 dark:text-gray-300">
            <b className="text-black dark:text-white">Languages:</b>{" "}
            {countryInfo.languages}
          </p>
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row gap-3">
        <b className="text-black dark:text-white">Border Countries: </b>
        <div className="flex flex-wrap gap-4  text-black dark:text-white  ">
          {borderCountries.length > 0
            ? borderCountries.map((border, index) => (
                <p
                  key={index}
                  className=" bg-secondaryLightBg dark:bg-secondaryDarkBg p-1 px-3 rounded-sm cursor-pointer"
                  onClick={() => navigateToDetails(border.code)}
                >
                  {border?.name}
                </p>
              ))
            : "None"}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
