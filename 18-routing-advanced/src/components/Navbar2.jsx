import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="py-3 px-2 bg-cyan-700">
      <button
        className="bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => navigate("/")}
      >
        Return to HomePage
      </button>
      <button
        className="bg-blue-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <button
        className="bg-blue-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => navigate(+1)}
      >
        Go forward
      </button>
    </div>
  );
};

export default Navbar2;
