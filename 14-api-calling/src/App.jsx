import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  // async function getData() {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   console.log(response);
  // }

  // const getData = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const data = await response.json();
  //   console.log(data);
  // };

  // const getData = async () => {
  //   // const response = await axios.get("https://fakestoreapi.com/products");
  //   // console.log(response.data);
  //   const { data } = await axios.get("https://fakestoreapi.com/products");
  //   console.log(data);
  // };

  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    setData(data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div className="">
        {data.map(function (elem, index) {
          return (
            <h1>
              {elem.author}
              {index + 1}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default App;
