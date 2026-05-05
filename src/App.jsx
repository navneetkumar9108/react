import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers, that have access to bank credit and are satisfied with the current product",
      tag: "Satisfied",
      color: "#60A5FA",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers, that have access to bank credit and are not satisfied with the current service",
      tag: "Underserved",
      color: "#F97316",
    },
    {
      img: "https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
      color: "#22C55E",
    },
    {
      img: "https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
      color: "#A855F7",
    },
    {
      img: "https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
      color: "#EC4899",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
