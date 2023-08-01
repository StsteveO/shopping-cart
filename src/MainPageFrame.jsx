//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import DefaultMainPage from "./DefaultMainPage";
import Mens from "./Mens";
import Womens from "./Womens";
import Jewelery from "./Jewelery";
import Electronics from "./Electronics";
import Cart from "./Cart";
// import CardsOrganizer from "./CardsOrganizer";

export default function MainPageFrame() {
  const [productInfo, setProductInfo]= useState([]);
  const location= useLocation();

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((itemsList) => {

        const updatedState = itemsList.map((item)=>{
          return {
            name: item.title,
            category: item.category,
            price: item.price.toFixed(2),
            id: item.id,
            image: item.image,
            description: item.description,
            addedToCart: false,
            quantity: 0,
          }
        })
        setProductInfo(updatedState);
      })

      .catch((error)=>console.error(error))

  }, []);
  // category^, description^, id^, image^, price^, title^
  const { name } = useParams();

  function changeAddedStatus(uniqueId){
    let newArray = productInfo.map((item) => {
        if(item.id===uniqueId && item.addedToCart===false){
          let newObj = { ...item, addedToCart: !item.addedToCart, quantity: (item.quantity +1) };
          return newObj;
        }else if(item.id===uniqueId && item.addedToCart===true){
          let newObj = { ...item, addedToCart: !item.addedToCart, quantity: (item.quantity - item.quantity) };
          return newObj;
        }else{
          return item;
        }
    });
    setProductInfo(newArray);
  }

  function changeQuantitiyAmt(uniqueId, updatedQuantity) {
    let newArray= productInfo.map((item)=> {
      if(item.id===uniqueId){
        let newObj = { ...item, quantity: updatedQuantity };
        return newObj;
      }else{
        return item;
      }
    });
    setProductInfo(newArray);
  }

  const mensClothing = productInfo.filter((item)=>{
    return (item.category==="men's clothing")
  });

  const womensClothing = productInfo.filter((item) => {
    return item.category === "women's clothing";
  });

  const jewelery = productInfo.filter((item) => {
    return item.category === "jewelery";
  });

  const electronics = productInfo.filter((item) => {
    return item.category === "electronics";
  });

  const cart = productInfo.filter((item) => {
    return item.addedToCart === true;
  });

  return (
    <>
      <div className="main-page-frame">
        <div className="main-page-logo">
          <Link to="/">{`[Lc]`}</Link>
        </div>
        <nav className="main-page-nav">
          <ul>
            <li>
              <Link to="/mainPageFrame/:" className={location.pathname === '/mainPageFrame/:' ? 'active' : ''}> {`All Products`}</Link>{" "}
            </li>
            <li>
              <Link to="/mainPageFrame/mens" className={location.pathname === '/mainPageFrame/mens' ? 'active' : ''}>{`Men's Clothing`}</Link>
            </li>
            <li>
              <Link to="/mainPageFrame/womens" className={location.pathname === '/mainPageFrame/womens' ? 'active' : ''}>{`Women's Clothing`}</Link>
            </li>
            <li>
              <Link to="/mainPageFrame/jewelery" className={location.pathname === '/mainPageFrame/jewelery' ? 'active' : ''}>{`Jewelery`}</Link>
            </li>
            <li>
              <Link to="/mainPageFrame/electronics" className={location.pathname === '/mainPageFrame/electronics' ? 'active' : ''}>{`Electronics`}</Link>
            </li>
            <li>
              <Link to="/mainPageFrame/cart" className={location.pathname === '/mainPageFrame/cart' ? 'active' : ''}>{`Cart:  ${cart.length} item(s)`}</Link>
            </li>
          </ul>
        </nav>
        <aside className="main-page-aside"></aside>
        <div className="conditional-main-section">
          {name === "mens" ? (
            <Mens list={mensClothing} updateCart={changeAddedStatus} />
          ) : name === "womens" ? (
            <Womens list={womensClothing} updateCart={changeAddedStatus} />
          ) : name === "jewelery" ? (
            <Jewelery list={jewelery} updateCart={changeAddedStatus} />
          ) : name === "electronics" ? (
            <Electronics list={electronics} updateCart={changeAddedStatus} />
          ) : name === "cart" ? (
            <Cart
              list={cart}
              updateCart={changeAddedStatus}
              changeQuantitiyAmt={changeQuantitiyAmt}
            />
          ) : (
            <DefaultMainPage
              fullList={productInfo}
              updateCart={changeAddedStatus}
            />
          )}
        </div>
      </div>
    </>
  );
}


// categories= "men's clothing", "women's clothing", "jewelery", "electronics"