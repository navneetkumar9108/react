import React from "react";

const App = () => {
  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem("user", "Navneet");
  // localStorage.setItem("age", "24");
  // const user = localStorage.getItem("user");
  // const age = localStorage.getItem("age");
  // console.log(user);
  // console.log(age);
  // localStorage.removeItem("user");
  // localStorage.removeItem("age");

  const user = {
    userName: "Navneet",
    age: 24,
    city: "Patna",
  };

  localStorage.setItem("user", JSON.stringify(user));

  const us = JSON.parse(localStorage.getItem("user"));
  console.log(us);

  return <div>App</div>;
};

export default App;
