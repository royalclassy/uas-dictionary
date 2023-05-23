import { InputKeyword } from "./components/InputKeyword";
import { Navbar } from "./components/Navbar";
import { Source } from "./components/Source";
import { Terms } from "./components/Terms";
import { useEffect, useState } from "react";
import { fetchApi } from "./utils/helper";
import { Meanings } from "./components/Meanings";
import { Loading } from "./components/Loading";
import { getFont, getTheme } from "./utils/localStorageUtils";

function App() {
  const [word, setWord] = useState();
  const [loading, setLoading] = useState(true);
  const [fontFamily, setFontFamily] = useState(getFont());
  const [isDark, setIsDark] = useState(getTheme());

  useEffect(() => {
    fetchASync("keyboard");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const fetchASync = async (word) => {
    try {
      setLoading(true);
      const result = await fetchApi(word);
      setWord(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onSubmitHandler = (word) => {
    fetchASync(word);
  };

  const toggleTheme = () => {
    if (isDark) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setIsDark((prev) => !prev);
  };

  const onFontChange = (fontType) => {
    localStorage.setItem("font", fontType);
    setFontFamily(fontType);
  };

  return (
    <div className="dark:bg-[#050505]">
      <div
        className={`flex flex-col gap-5 p-6 ${fontFamily} dark:bg-[#050505] min-h-screen dark:text-[#f5f5f5] desktop:w-[50%] desktop:m-auto`}
      >
        <Navbar
          fontFamily={fontFamily}
          onFontChange={onFontChange}
          toggleTheme={toggleTheme}
          isDark={isDark}
        ></Navbar>
        <InputKeyword onSubmitHandler={onSubmitHandler} />
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <Terms
              word={word.word}
              phonetics={word.phonetics[0].text}
              audio={word.phonetics[0].audio}
            ></Terms>
            {word.meanings.map((meaning, index) => (
              <Meanings
                key={`meaning-${index}`}
                partOfSpeech={meaning.partOfSpeech}
                definitions={meaning.definitions}
                synonyms={meaning.synonyms}
                antonyms={meaning.antonyms}
              ></Meanings>
            ))}
            <Source sourceUrl={word.sourceUrls}></Source>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
