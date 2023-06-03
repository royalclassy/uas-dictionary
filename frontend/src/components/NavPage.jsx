import { Link, useNavigate } from "react-router-dom";

export const NavPage = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
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
          <Link to={"/history"}>History</Link>
        </div>
      )}
    </div>
  );
};
