import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1 className={style.logo}>This is a header</h1>
      <button className={style.btn}>Login</button>
    </div>
  );
};

export default Header;
