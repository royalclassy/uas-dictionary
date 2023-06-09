import { useEffect, useState } from "react";
import { getTheme } from "../utils/localStorageUtils";

export default function useTheme() {
  const [isDark, setIsDark] = useState(getTheme());

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleTheme };
}
