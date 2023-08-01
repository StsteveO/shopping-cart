//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";
import CardsOrganizer from "./CardsOrganizer";

//eslint-disable-next-line
export default function Jewelery({ list, updateCart }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="jewelery-page">{`Jewelery`}</h1>
      <CardsOrganizer list={list} updateCart={updateCart} />
    </>
  );
}
