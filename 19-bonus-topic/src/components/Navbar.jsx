import React from "react";

const Navbar = (props) => {
  console.log(props);
  function changeTheme() {
    console.log("theme change");
    props.setTheme("dark");
  }
  return (
    <div>
      <p>{props.theme}</p>
      {/* <button
        onClick={() => {
          props.setTheme("dark");
        }}
      >
        Change Theme
      </button> */}
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
