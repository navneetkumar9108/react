import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "John",
    age: 30,
    city: "New York",
  });

  const [num, setNum] = useState([10, 20, 30]);

  const [a, setA] = useState(10);
  const updateA = () => {
    setA((prev) => prev + 1);
    setA((prev) => prev + 1);
    setA((prev) => prev + 1);
    // setA(a + 1);
    // setA(a + 1);
    // setA(a + 1); batch Update
  };
  const updateUser = () => {
    setUser((prev) => ({
      ...prev,
      name: "Jane",
      age: 25,
      city: "Los Angeles",
    }));
  };
  // const updateUser = () => {
  //   let newUser = { ...user };
  //   newUser.name = "Jane";
  //   newUser.age = 25;
  //   newUser.city = "Los Angeles";
  //   setUser(newUser);
  // };

  const updateNum = () => {
    let newNum = [...num];
    // newNum[0] = 40;
    // newNum[1] = 50;
    // newNum[2] = 60;
    newNum.push(40);
    setNum(newNum);
  };

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={updateA}>Update A</button>
      <h1>
        {num}
        {/* {num[0]}
        {num[1]}
        {num[2]} */}
      </h1>
      <button onClick={updateNum}>Update Num</button>
      {/* <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.city}</h3>
      <button onClick={updateUser}>Update User</button> */}
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.city}</h3>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default App;
