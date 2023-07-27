//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DefaultMainPage from "./DefaultMainPage";
import Mens from "./Mens";
import Womens from "./Womens";

export default function MainPageFrame() {
  // const [count, setCount] = useState(0)
  const {name}= useParams();

  return (
    <>
      <div className="test">Main Page Frame</div>

      {name === "mens" ? (
        <Mens />
      ) : name === "womens" ? (
        <Womens />
      ) : (
        <DefaultMainPage />
      )}
    </>
  );
}
