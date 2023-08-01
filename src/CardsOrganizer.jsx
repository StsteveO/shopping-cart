//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";

//eslint-disable-next-line
export default function CardsOrganizer({ list, updateCart }) {
  // const [count, setCount] = useState(0)
  // console.log(list);
  
  function readOut(event){
    const pickedItemId= Number(event.target.innerText);
    updateCart(pickedItemId);
  }

  return (
    <>
      <div className="allCards">
        {/* eslint-disable-next-line */}
        {list.map((listItem) => {
          return (
            <div key={listItem.id} className="itemContainer">
              {/* <div className="hidden">{listItem.id}</div> */}
              <button className="addProductToCart" onClick={readOut}>
                {listItem.addedToCart===true 
                ? <div className="added">{listItem.id}</div> 
                : <div className="notAddedPlusSymbol">{listItem.id}</div>}
              </button>

              <button className="distractionBtn">
                {listItem.addedToCart===true
                ? <div className="distractionRemoveFromCart">-</div>
                : <div className="distractionAddToCart">+</div>}
              </button>

              <img className="itemImg" src={listItem.image} alt="" />
              <div className="itemName">{listItem.name}</div>
              {/* <div className="itemDescription">{listItem.description}</div> */}
              <div className="itemPrice">{`$ ${listItem.price}`}</div>
              {/* category, discription^, id^, image^, price, title^ */}
            </div>
          );
        })}
      </div>
    </>
  );
}
