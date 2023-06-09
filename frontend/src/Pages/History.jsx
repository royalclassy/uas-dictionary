import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const History = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  const { historyData, setHistoryData } = useHistory(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changeHistory, setChangeHistory] = useState("");
  const [historyID, setHistoryID] = useState("");

  const onModalConfirmHandler = async () => {
    const res = await axios.post("http://localhost:5000/history/edit", {
      newKeyword: changeHistory,
      historyID: historyID,
      username: user,
    });

    setHistoryData(res.data.result);
    setIsModalOpen(false);
  };

  const onEditHistoryHandler = (historyID, value) => {
    setHistoryID(historyID);
    setChangeHistory(value);
    setIsModalOpen(true);
  };

  const onChangeHistoryHandler = (e) => {
    setChangeHistory(e.target.value);
  };

  const onDeleteHandler = async (historyID) => {
    const res = await axios.delete(
      `http://localhost:5000/history/${historyID}`
    );

    setHistoryData((prev) =>
      prev.filter((data) => data.historyID !== historyID)
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center dark:text-white">
      <div className="py-5 px-2 rounded-md w-fit max-w-[600px] bg-slate-800">
        <button aria-label="back to home">
          <Link
            className="px-4 py-1.5 pb-2 bg-yellow-500 rounded-md font-bold"
            to={"/home"}
          >
            Back
          </Link>
        </button>
        <h1 className="text-xl text-center font-bold my-6">History</h1>
        {historyData.length === 0 ? (
          <div>
            <h1 className="text-center w-[80vw] max-w-[500px] mb-2">{`History is Empty :(`}</h1>
          </div>
        ) : (
          <table className="table-auto w-full rounded-md overflow-hidden">
            <thead>
              <tr className="bg-[#a445ed] rounded-md">
                <th className="p-2 px-4 text-center ">ID</th>
                <th className="p-2 px-4 text-center ">Keyword</th>
                <th className="p-2 px-4 text-center ">Date</th>
                <th className="p-2 px-4 text-center ">Modification</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((data, index) => {
                return (
                  <tr key={`history-${index}`} className="bg-slate-700">
                    <td className="p-2 px-4 text-center">{data.historyID}</td>
                    <td className="p-2 px-4 text-center">
                      {" "}
                      <Link
                        className="underline decoration-1"
                        to={`http://localhost:5173/home/?word=${data.keyword}`}
                      >
                        {data.keyword}
                      </Link>
                    </td>
                    <td className="p-2 px-4 text-center">
                      {data.date.slice(0, 10)}
                    </td>
                    <td className="my-2 flex flex-col desktop:flex-row gap-2 justify-center items-center w-full h-full">
                      <button
                        onClick={() => {
                          onEditHistoryHandler(data.historyID, data.keyword);
                        }}
                        className="px-1.5 py-1 text-sm bg-yellow-500 rounded-md w-full max-w-[72px]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          onDeleteHandler(data.historyID);
                        }}
                        className="px-1.5 py-1 text-sm bg-red-500 rounded-md w-full max-w-[72px]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {isModalOpen && (
        <div className="absolute h-screen w-full flex backdrop-blur-sm">
          <div className="flex flex-col gap-4 p-5 rounded-md max-w-[500px] bg-gray-600 justify-center items-center m-auto">
            <h1 className="font-bold text-lg text-purple-400">Change Modal</h1>
            <input
              type="text"
              value={changeHistory}
              onChange={(e) => {
                onChangeHistoryHandler(e);
              }}
              className="p-1 px-2 rounded-md text-black"
            />
            <div className="flex gap-2 self-end">
              <button
                onClick={onModalConfirmHandler}
                className="px-1.5 py-1 text-sm  bg-green-400 rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="px-1.5 py-1 text-sm  bg-red-400 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const useHistory = (user) => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchAsyncHistory = async () => {
      const result = await axios.get(`http://localhost:5000/history/${user}`);
      setHistoryData(result.data.history);
    };
    fetchAsyncHistory();
  }, [user]);

  return { historyData, setHistoryData };
};
