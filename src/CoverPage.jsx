//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";

export default function CoverPage() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="cover-page">
        <div className="cover-page-title">{`Lori's [Lc] Closet`}</div>
        <Link to="mainPageFrame/:" className="enterStoreSite">Enter Store Site</Link> 
        <div className="coverPhotoCredit">Photo by <a href="https://unsplash.com/@jorenaranas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joren Aranas</a> on <a href="https://unsplash.com/photos/womans-hippie-style-sunglasses-nmuyqgSOpEE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
      </div>
    </>
  );
}
