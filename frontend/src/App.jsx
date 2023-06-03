import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import useTheme from "./hooks/useTheme";
import { Register } from "./Pages/Register";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { History } from "./Pages/History";
import { getUser } from "./utils/helper";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [user, setUser] = useState(getUser());

  return (
    <div className="dark:bg-[#050505] min-h-screen">
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              user={user}
              setUser={setUser}
              isDark={isDark}
              toggleTheme={toggleTheme}
            />
          }
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/register"
          element={<Register setUser={setUser} />}
        ></Route>
        <Route path="/history" element={<History user={user} />} />
        <Route path="*" element={<Navigate to={'/home'}/>}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
