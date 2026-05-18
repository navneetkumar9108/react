import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", name);
    setName("");
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            // console.log(e.target.value);
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
