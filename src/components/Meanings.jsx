export const Meanings = ({ partOfSpeech, definitions, synonyms, antonyms }) => {
  return (
    <div>
      <h2 className="flex gap-6 items-center italic font-bold text-lg after:bg-slate-300 after:h-[1px] after:inline-block after:w-full">
        {partOfSpeech}
      </h2>
      <p className="mt-4 mb-2">Meaning</p>
      <ul className="flex flex-col gap-3 list-disc marker:text-lightPurple pl-5">
        {definitions.map((definition, index) => (
          <div key={`definition-${index}`}>
            <li>{definition.definition}</li>
            {definition.example && (
              <p className="mt-2 text-[#757575]">{definition.example}</p>
            )}
          </div>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className="flex gap-4 mt-4">
          <p>Synonyms</p>
          <div className="flex gap-2 flex-wrap">
            {synonyms.map((synonym) => (
              <a
                className="text-lightPurple"
                key={synonym}
                href={`https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`}
              >
                {synonym}
              </a>
            ))}
          </div>
        </div>
      )}
      {antonyms.length > 0 && (
        <div className="flex gap-4 mt-4">
          <p>Antonyms</p>
          <div className="flex gap-2 flex-wrap">
            {antonyms.map((antonym) => (
              <a
                className="text-lightPurple"
                key={antonym}
                href={`https://api.dictionaryapi.dev/api/v2/entries/en/${antonym}`}
              >
                {antonym}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
