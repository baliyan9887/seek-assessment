import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <div className="flex items-center">
      <button
        className="text-gray-600 dark:text-gray-400 flex items-center"
        onClick={toggleTheme}
      >
        {darkMode ? "Dark Mode" : `Light Mode`}
        {darkMode ? <Moon className="ml-4" /> : <Sun className="ml-4" />}
      </button>
      {/* <label className="switch relative ml-3">
        <input type="checkbox" onChange={toggleTheme} className="hidden" />
        <span className="slider"></span>
      </label> */}
    </div>
  );
};

export default ThemeToggle;
