import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded-full dark:bg-gray-100 bg-gray-800 dark:text-gray-800 text-white shadow-md dark:hover:bg-gray-200 hover:bg-gray-700 transition duration-300"
    >
      {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
    </button>
  );
};

export default ThemeToggle;
