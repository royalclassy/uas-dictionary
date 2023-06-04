import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const History = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  const { historyData, setHistoryData } = useHistory(user);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center dark:text-white">
      <div className="w-[80%] max-w-[400px]">
        <button aria-label="back to home">
          <Link className="px-4 py-1.5 pb-2 bg-yellow-500 rounded-md font-bold" to={'/home'}>Back</Link>
        </button>
        <h1 className="text-xl text-center font-bold my-6">History</h1>
        {historyData.length === 0 ? (
          <div>
            <h1 className="text-center">History is Empty :(</h1>
          </div>
        ) : (
          <table className="table-auto w-full rounded-md overflow-hidden">
            <tr className="bg-[#a445ed] rounded-md">
              <th className="p-2 text-center ">ID</th>
              <th className="p-2 text-center ">Keyword</th>
              <th className="p-2 text-center ">Date</th>
            </tr>

            {historyData.map((data, index) => {
              console.log(data);
              return (
                <tr key={`history-${index}`} className="bg-slate-700">
                  <td className="p-2 text-center">{data.historyID}</td>
                  <td className="p-2 text-center">
                    {" "}
                    <Link
                      className="underline decoration-1"
                      to={`http://localhost:5173/home/?word=${data.keyword}`}
                    >
                      {data.keyword}
                    </Link>
                  </td>
                  <td className="p-2 text-center">{data.date.slice(0, 10)}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
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
