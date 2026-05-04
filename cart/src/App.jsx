import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 100,
      name: "iphone 14 pro",
      quantity: 0,
    },
    {
      price: 200,
      name: "iphone 14 pro max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const increaseQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity += 1;
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decreaseQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity -= 1;
      newTotalAmount -= newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.forEach((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  // function increaseQuantity(index) {
  //   let newProductList = [...productList];
  //   newProductList[index].quantity += 1;
  //   setProductList(newProductList);
  // }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
