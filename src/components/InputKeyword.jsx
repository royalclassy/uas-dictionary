import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export const InputKeyword = ({ onSubmitHandler }) => {
  const wordInput = useRef();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onSubmitHandler(wordInput.current.value);
    }
  };

  return (
    <div className="relative">
      <input
        id="searchKeyword"
        type="text"
        className="font-bold bg-[#F5F5F5] p-5 px-5 focus:outline-2 focus:outline-[#A445ED] rounded-2xl w-full placeholder:font-bold placeholder:text-slate-500"
        placeholder="Search for any word..."
        onKeyDown={onKeyDownHandler}
        ref={wordInput}
      />
      <label
        htmlFor="searchKeyword"
        className="absolute top-[50%] translate-y-[-50%] right-7"
      >
        <FontAwesomeIcon
          className="text-lightPurple"
          icon={faMagnifyingGlass}
          size="lg"
        ></FontAwesomeIcon>
      </label>
    </div>
  );
};
