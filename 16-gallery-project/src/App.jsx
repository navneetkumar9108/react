import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    // const response = await axios.get(
    //   "https://picsum.photos/v2/list?page=2&limit=100",
    // );
    // const { data } = await axios.get(
    //   "https://picsum.photos/v2/list?page=3&limit=30",
    // );
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    setUserData(data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1">
      loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx} className="">
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover "
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto">
      {/* <button
        onClick={getData}
        className="bg-green-600 active:scale-45 mb-3 px-5 text-white py-2 rounded"
      >
        Get Data
      </button> */}
      <div className="flex flex-wrap gap-4 p-2 h-[82%]">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <h4>page{index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
