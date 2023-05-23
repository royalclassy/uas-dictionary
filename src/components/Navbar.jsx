import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "react-toggle";

import "react-toggle/style.css";

export const Navbar = ({ toggleTheme }) => {
  return (
    <div className="flex mb-5 justify-between items-center">
      <div className="">
        <FontAwesomeIcon
          className="text-slate-500"
          icon={faBook}
          size="2xl"
        ></FontAwesomeIcon>
      </div>
      <div className="flex">
        <Toggle onChange={toggleTheme}></Toggle>
      </div>
    </div>
  );
};
