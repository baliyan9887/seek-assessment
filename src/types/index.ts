export type CountryDetails = {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { official: string } };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };
  flags: { png: string };
  borders?: string[];
  cca3: string;
};

export type BroderCountries = {
  name: string;
  code: string;
};

export interface CountryInfoProps {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { official: string } };
  };
  countryInfo: {
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    tld: string;
    currencies: string;
    languages: string;
  } | null;
  borderCountries: BroderCountries[];
}

export interface FilterByRegionProps {
  options: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

export interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
