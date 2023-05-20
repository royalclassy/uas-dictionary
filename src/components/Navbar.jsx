import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <div className="flex mb-5">
      <div className="">
        <FontAwesomeIcon
          className="text-slate-500"
          icon={faBook}
          size="2xl"
        ></FontAwesomeIcon>
      </div>
      <div className="flex">
        <div></div>
      </div>
    </div>
  );
};
