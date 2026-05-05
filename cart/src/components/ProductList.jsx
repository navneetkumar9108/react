import React from "react";
import Product from "./product";

export default function ProductList(props) {
  // console.log(props);
  return props.productList.length > 0 ? (
    props.productList.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          increaseQuantity={props.increaseQuantity}
          decreaseQuantity={props.decreaseQuantity}
          removeItem={props.removeItem}
          index={index}
        />
      );
    })
  ) : (
    <h1 className="text-center">No Products in Cart</h1>
  );
}
