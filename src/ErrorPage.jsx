//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";

export default function ErrorPage() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="test">Error Page</div>
      <Link to="/">Home</Link>
    </>
  );
}