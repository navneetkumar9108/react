import React, { useState } from "react";
import Count from "./components/Count";

const App = () => {
  // useState is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.

  const [a, setA] = useState(20);
  const [userName, setUserName] = useState("John Doe");

  function test() {
    setA(a + 1);
    setUserName("jack");
  }

  // let a = 20;
  // function test() {
  //   console.log(a);
  //   // a = 30;
  //   a++;
  //   console.log(a);
  // }
  return (
    <div>
      <h1>
        Value of a: {a} <br />
        Value of userName: {userName}
      </h1>
      <button onClick={test}>Change a</button>
      <Count />
    </div>
  );
};

export default App;
