import { useEffect, useState } from "react";
import ToggleThemeMode from "../toggleThemeMode";

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
    applyTheme();
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const applyTheme = () => {
    document.documentElement.classList.toggle("dark", darkMode);
  };

  useEffect(() => {
    applyTheme();
  }, []);
  return (
    <div className=" flex justify-between items-center p-4 px-6 lg:px-20 bg-secondaryLightBg  dark:bg-secondaryDarkBg sticky top-0">
      <h1 className=" text-[16px] lg:text-[24px] font-bold dark:text-white text-black">
        Where in the world?
      </h1>
      <ToggleThemeMode toggleTheme={toggleTheme} darkMode={darkMode} />
    </div>
  );
}

export default Header;
