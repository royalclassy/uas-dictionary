import { Link, useNavigate } from "react-router-dom";

export const NavPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-5 mt-2">
      {!user ? (
        <button
          className="bg-[#a445ed] px-3 py-1.5 rounded-md font-bold text-white"
          aria-label="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      ) : (
        <div className="flex w-full justify-between">
          <h2 className="text-2xl italic font-bold">Hai, {user}</h2>
          <div className="flex items-center gap-4">
            <Link className="underline decoration-1" to={"/history"}>
              History
            </Link>
            <button
              className="underline decoration-1"
              onClick={() => setUser("")}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
