//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";
// import MainPageFrame from "./MainPageFrame";
import CardsOrganizer from "./CardsOrganizer";

//eslint-disable-next-line
export default function DefaultMainPage({ fullList, updateCart }) {
  // const [count, setCount] = useState(0)
  // console.log(fullList);

  return (
    <>
      <h1 className="home-page">All Products</h1>
      <CardsOrganizer list={fullList} updateCart={updateCart} />
    </>
  );
}