import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = ({ setUser }) => {
  const username = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    const result = await axios.post("http://localhost:5000/user/register", {
      username: username.current.value,
      password: password.current.value,
    });
    if (result.data.status) {
      setUser(result.data.username);
      localStorage.setItem("user", result.data.username);
      return navigate("/home");
    }

    toast(result.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="p-6 dark:bg-white bg-[#e0e0e0] rounded-md flex flex-col justify-center items-center gap-4 w-[80%] max-w-[350px]">
          <h1 className="font-bold text-2xl text-[#a445ed]">Register</h1>
          <div className="flex gap-2 flex-col w-full">
            <input
              className=" bg-[#F5F5F5] px-4 py-2 w-full focus:outline-2 focus:outline-[#A445ED] rounded-xl"
              type="text"
              ref={username}
              placeholder="username"
            />
            <input
              className=" bg-[#F5F5F5] px-4 py-2 w-full focus:outline-2 focus:outline-[#A445ED] rounded-xl"
              type="password"
              ref={password}
              placeholder="password"
            />
          </div>
          <button
            onClick={onSubmitHandler}
            className="w-full rounded-md m-2 py-2 font-bold text-white bg-[#a445ed]"
          >
            Submit
          </button>
          <p className="text-sm">
            {`Already have an account?`}{" "}
            <Link to={"/login"} className="font-bold text-[#a445ed]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
