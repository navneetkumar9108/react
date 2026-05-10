import React from "react";

const App = () => {
  function btnClicked() {
    console.log("Button Clicked");
  }

  function mouseEnter() {
    console.log("Mouse Entered");
  }

  function inputChange(e) {
    console.log("user is typing");
    console.log(e.target.value);
  }

  function inputChanging(value) {
    console.log("user is typing");
    console.log(value);
  }

  function pageScrolling(value) {
    console.log("Page is scrolling");
    console.log(value);
    if (value > 0) {
      console.log("scrolling down");
    } else {
      console.log("scrolling up");
    }
  }

  return (
    <div>
      {/* <button onClick={btnClicked}>Click</button> */}
      {/* <button onDoubleClick={btnClicked} onMouseEnter={mouseEnter}>
        Click
      </button>
      <button
        onClick={function () {
          console.log("Explore this is call");
        }}
      >
        Explore this
      </button>
      <button
        onClick={() => {
          console.log("Explore this is call");
        }}
      >
        Explore this2
      </button> */}

      {/* <input type="text" onChange={inputChange} /> */}

      {/* <input
        type="text"
        onChange={function (e) {
          inputChanging(e.target.value);
        }}
      /> */}

      <div
        onWheel={(e) => {
          // console.log(e);
          pageScrolling(e.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;
