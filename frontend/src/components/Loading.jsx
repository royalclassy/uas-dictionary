import { HashLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="flex w-full mt-20 justify-center items-center">
      <HashLoader color="#a445ed" size={60}/>
    </div>
  );
};
