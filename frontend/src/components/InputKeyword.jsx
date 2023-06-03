import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export const InputKeyword = ({ onSubmitHandler, searchParams }) => {
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
        className="font-bold dark:bg-[#1f1f1f] bg-[#F5F5F5] p-5 px-5 focus:outline-2 focus:outline-[#A445ED] rounded-2xl w-full placeholder:font-bold"
        placeholder="Search for any word..."
        onKeyDown={onKeyDownHandler}
        ref={wordInput}
        defaultValue={searchParams}
      />
      <label
        htmlFor="searchKeyword"
        className="absolute top-[50%] translate-y-[-50%] right-7"
      >
        <FontAwesomeIcon
          className="text-lightPurple"
          icon={faMagnifyingGlass}
          size="lg"
        />
      </label>
    </div>
  );
};
