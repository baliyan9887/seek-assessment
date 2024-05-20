import React, { useState, useEffect, useRef } from "react";
import { FilterByRegionProps } from "../../types";

const FilterByRegion: React.FC<FilterByRegionProps> = ({
  options,
  selectedRegion,
  onSelectRegion,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionClick = (region: string) => {
    onSelectRegion(region);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left mb-4" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 dark:bg-secondaryDarkBg bg-secondaryLightBg text-sm font-medium text-black dark:text-gray-300 hover:bg-primaryLightBg transition-colors duration-300"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedRegion ? `Region: ${selectedRegion}` : "Filter by Region"}
          <svg
            className="-mr-1 ml-2 h-5 w-5 transition-transform duration-300 transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-secondaryLightBg dark:bg-secondaryDarkBg ring-1 ring-primaryLightBg dark:ring-primaryDarkBg ring-opacity-5 focus:outline-none transition-transform duration-300 transform-gpu`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{ transitionProperty: "opacity, transform" }}
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <button
              key={option}
              className={`block w-full text-left px-4 py-2 text-sm ${
                selectedRegion === option
                  ? "dark:bg-secondaryDarkBg dark:text-white bg-secondaryLightBg text-black"
                  : "dark:text-gray-300 text-gray-600"
              } hover:bg-primaryLightBg hover:text-black dark:hover:bg-primaryDarkBg dark:hover:text-white transition-colors duration-300`}
              role="menuitem"
              onClick={() => handleRegionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByRegion;
