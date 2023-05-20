import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Terms = ({ word, phonetics, audio }) => {
  const [isPlayed, setIsPlayed] = useState(false);

  const onAudioHandler = async () => {
    setIsPlayed(true);
    const audioObj = new Audio(audio);
    audioObj.play();
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] font-bold">{word}</h1>
        <h2 className="text-lightPurple text-lg">{phonetics}</h2>
      </div>
      <button
        className={`h-[72px] w-[72px] rounded-full bg-[#a445ed40] ${
          isPlayed && "bg-lightPurple"
        }`}
        onClick={onAudioHandler}
      >
        <FontAwesomeIcon
          size="xl"
          className={`text-lightPurple relative right-[-2px] ${isPlayed && 'text-white'}`}
          icon={faPlay}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};
