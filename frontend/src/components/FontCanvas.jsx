export const FontCanvas = ({ isCanvasOpen, onFontChange }) => {
  return (
    <div
      className={`${
        isCanvasOpen ? "flex" : "hidden"
      } absolute shadow-lg rounded-lg bg-white dark:bg-[#050505] dark:shadow-lightPurple flex-col gap-2 p-4 z-10 top-10 left-0`}
    >
      <button
        className="text-start hover:text-lightPurple font-sans"
        aria-label="sans-serif font change"
        onClick={() => {
          onFontChange("font-sans");
        }}
      >
        Sans serif
      </button>
      <button
        className="text-start hover:text-lightPurple font-serif"
        aria-label="serif font change"
        onClick={() => {
          onFontChange("font-serif");
        }}
      >
        Serif
      </button>
      <button
        className="text-start hover:text-lightPurple font-mono"
        aria-label="mono font change"
        onClick={() => {
          onFontChange("font-mono");
        }}
      >
        Mono
      </button>
    </div>
  );
};
