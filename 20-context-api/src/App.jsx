import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      {/* <Navbar theme={theme} /> */}
      <Navbar />
      <Button />
    </div>
  );
};

export default App;
