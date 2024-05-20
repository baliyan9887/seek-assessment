import React from "react";
import { Search } from "lucide-react";
import { SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="flex items-center bg-secondaryLightBg dark:bg-secondaryDarkBg text-black dark:text-gray-400  rounded-lg p-2 lg:w-[400px]">
      <Search />
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search for a country..."
        className="bg-secondaryLightBg dark:bg-secondaryDarkBg text-black dark:text-gray-200 placeholder-gray-400 outline-none w-full ml-2"
      />
    </div>
  );
};

export default SearchBar;
