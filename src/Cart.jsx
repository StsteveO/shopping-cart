//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";
import CardsOrganizer from "./CardsOrganizer";
import Checkout from "./Checkout"

//eslint-disable-next-line
export default function Cart({ list, updateCart, changeQuantitiyAmt }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="cart-page">{`Cart`}</h1>
      <CardsOrganizer list={list} updateCart={updateCart} />
      <h2>Checkout</h2>
      <Checkout list={list} changeQuantitiyAmt={changeQuantitiyAmt} />
    </>
  );
}
