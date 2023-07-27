//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";

export default function CoverPage() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="test">Cover Page</div>
      <Link to="mainPageFrame/:">MainFramePage</Link>
    </>
  );
}
