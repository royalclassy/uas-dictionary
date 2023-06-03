import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export const ThemeSwitcher = ({ toggleTheme, isDark }) => {
  return (
    <div className="flex items-center gap-5">
      <Toggle
        className="custom-toggle"
        icons={false}
        onChange={toggleTheme}
        defaultChecked={isDark}
      />
      <FontAwesomeIcon
        className="text-[#757575] dark:text-lightPurple"
        icon={faMoon}
        size="xl"
      />
    </div>
  );
};
