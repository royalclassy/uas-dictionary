import { InputKeyword } from "./components/InputKeyword";
import { Navbar } from "./components/Navbar";
import { Source } from "./components/Source";
import { Terms } from "./components/Terms";
import { useEffect, useState } from "react";
import { fetchApi } from "./utils/helper";
import { Meanings } from "./components/Meanings";

function App() {
  const [word, setWord] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchASync("test");
  }, []);

  const fetchASync = async (word) => {
    try {
      const result = await fetchApi(word);
      setWord(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onSubmitHandler = (word) => {
    console.log(word);
    fetchASync(word);
  };

  return (
    <div className="flex flex-col gap-5 p-6 font-sans">
      <Navbar></Navbar>
      <InputKeyword onSubmitHandler={onSubmitHandler} />
      {loading ? (
        <></>
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
            ></Meanings>
          ))}
          <Source sourceUrl={word.sourceUrls}></Source>
        </>
      )}
    </div>
  );
}

export default App;
