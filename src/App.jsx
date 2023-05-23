import { InputKeyword } from "./components/InputKeyword";
import { Navbar } from "./components/Navbar";
import { Source } from "./components/Source";
import { Terms } from "./components/Terms";
import { useEffect, useState } from "react";
import { fetchApi } from "./utils/helper";
import { Meanings } from "./components/Meanings";
import { Loading } from "./components/Loading";

function App() {
  const [word, setWord] = useState();
  const [loading, setLoading] = useState(true);
  const [fontFamily, setFontFamily] = useState("font-mono");

  useEffect(() => {
    fetchASync("keyboard");
  }, []);

  const fetchASync = async (word) => {
    try {
      setLoading(true);
      const result = await fetchApi(word);
      setWord(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onSubmitHandler = (word) => {
    fetchASync(word);
  };

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  const onFontChange = (fontType) => {
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
