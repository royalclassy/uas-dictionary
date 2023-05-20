import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Source = ({ sourceUrl }) => {
  return (
    <div className="flex flex-col gap-1 w-full border-t-[1px] border-t-slate-300 pt-4">
      <p>Source</p>
      <a className="flex gap-2" href={sourceUrl}>
        {sourceUrl}
        <span>
          <FontAwesomeIcon
            size="xs"
            icon={faArrowUpRightFromSquare}
            className="text-slate-400"
          ></FontAwesomeIcon>
        </span>
      </a>
    </div>
  );
};
