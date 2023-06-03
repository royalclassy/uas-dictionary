import { InputKeyword } from "./components/InputKeyword";
import { Navbar } from "./components/Navbar";
import { Source } from "./components/Source";
import { Terms } from "./components/Terms";
import { useEffect, useState } from "react";
import { fetchApi } from "./utils/helper";
import { Meanings } from "./components/Meanings";
import { Loading } from "./components/Loading";
import { getFont } from "./utils/localStorageUtils";
import useTheme from "./hooks/useTheme";
import { useSearchParams } from "react-router-dom";
import { NotFound } from "./components/NotFound";

function App() {
  const [word, setWord] = useState();
  const [loading, setLoading] = useState(true);
  const [fontFamily, setFontFamily] = useState(getFont());
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const word = searchParams.get("word");
    if (word) {
      fetchAsync(word);
    } else {
      fetchAsync("keyboard");
    }
  }, [searchParams]);

  const fetchAsync = async (word) => {
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
    setSearchParams({ word });
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
        />
        <InputKeyword
          onSubmitHandler={onSubmitHandler}
          searchParams={searchParams.get("word")}
        />
        {loading ? (
          <Loading />
        ) : word.error ? (
          <NotFound />
        ) : (
          <>
            <Terms
              word={word.word}
              phonetics={
                word.phonetics.length === 0 ? word.word : word.phonetics[0].text
              }
              audio={
                word.phonetics.length === 0 ? word.word : word.phonetics[0].text
              }
            />
            {word.meanings.map((meaning, index) => (
              <Meanings
                key={`meaning-${index}`}
                partOfSpeech={meaning.partOfSpeech}
                definitions={meaning.definitions}
                synonyms={meaning.synonyms}
                antonyms={meaning.antonyms}
              />
            ))}
            <Source sourceUrl={word.sourceUrls} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
