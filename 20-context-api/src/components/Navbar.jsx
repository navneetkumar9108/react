import React from "react";
import Nav2 from "./Nav2";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

// const Navbar = (props) => {
//   const [theme] = useContext(ThemeDataContext);
//   //   console.log(data);
//   return (
//     <div className="nav">
//       {/* <h2>{data}</h2> */}
//       <h2>Navneet</h2>
//       <Nav2 theme={props.theme} />
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);
  //   console.log(data);
  return (
    <div className={theme}>
      <h2>Navneet</h2>
      <Nav2 />
    </div>
  );
};

export default Navbar;
