import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  function jump5numbers() {
    setCount(count + 5);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="">
      <p className="text-center">Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <div className="flex  justify-center">
        <button
          className="p-3 bg-black text-white m-2 rounded-full"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="p-3 bg-black text-white m-2 rounded-full"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="p-3 bg-black text-white m-2 rounded-full"
          onClick={jump5numbers}
        >
          Jump 5 Numbers
        </button>
        <button
          className="p-3 bg-black text-white m-2 rounded-full"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Count;
