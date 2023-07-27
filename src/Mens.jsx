//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";

export default function Mens() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="test">Mens Content</div>
      <Link to="/mainPageFrame/:">MainFramePage</Link>
      <br />
      <Link to="/mainPageFrame/womens">Womens Page</Link>
    </>
  );
}
