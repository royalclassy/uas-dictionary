import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "react-toggle";

import "react-toggle/style.css";

export const Navbar = ({ toggleTheme }) => {
  return (
    <div className="flex mb-5 mt-7 justify-between items-center">
      <div className="">
        <FontAwesomeIcon
          className="text-slate-500"
          icon={faBook}
          size="2xl"
        ></FontAwesomeIcon>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <Toggle
            className="custom-toggle"
            icons={false}
            onChange={toggleTheme}
          ></Toggle>
          <FontAwesomeIcon
            className="text-[#757575] dark:text-lightPurple"
            icon={faMoon}
            size="xl"
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};
