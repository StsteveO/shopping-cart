//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";

export default function DefaultMainPage() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="test">Default Content</div>
      <Link to="/">Cover Page</Link>
      <br />
      <Link to="/mainPageFrame/mens">Mens Page</Link>
      <br />
      <Link to="/mainPageFrame/womens">Womens Page</Link>
    </>
  );
}
