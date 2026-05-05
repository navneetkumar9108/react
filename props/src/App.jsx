import React from "react";
import Card from "./components/card";
const App = () => {
  return (
    <div className="parent">
      <Card
        user="jam "
        age={24}
        img="https://images.unsplash.com/photo-1714630448768-d4f3ab1a154b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="John Doe"
        age={30}
        img="https://plus.unsplash.com/premium_photo-1677993185897-c1930441493b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Jane Smith"
        age={28}
        img="https://images.unsplash.com/photo-1775873931506-cfd9d96d030b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
