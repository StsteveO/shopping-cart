//eslint-disable-next-line
import { useState, useEffect } from "react";
//eslint-disable-next-line
import { Link } from "react-router-dom";

//eslint-disable-next-line
export default function Checkout({ list, changeQuantitiyAmt }) {

  function stopSubmit(event) {
    return event.preventDefault();
  }

  function updateQuantityAmt(event){
    let elementId = Number(event.target.attributes[1].value);
    let amtChange= Number(event.target.value);
    
    return (changeQuantitiyAmt(elementId, amtChange));
  }

  //eslint-disable-next-line
  let overallSumTotal= list.reduce((sum, current) => {
          return sum + ((Number (current.price)) * current.quantity)
        }, 0);

  return (
    <>
      <div className="overallTotalContainer">
        <div className="overallTotal">
          Overall Total : $ {overallSumTotal.toFixed(2)}
        </div>
        <button className="continueWithOrderBtn">* Continue with Order</button>
        <div className="disclaimer">
          * ( Not a real store. Site is for educational purposes only. )
        </div>
        <br/>
        <div className="disclaimer">
          To restart shopping simulation,
          please click on logo at top-left corner. Thank you.
        </div>
      </div>

      <div className="allCheckoutCards">
        {/* eslint-disable-next-line */}
        {list.map((listItem) => {
          return (
            <div key={listItem.id} className="checkoutItemContainer">
              <img className="checkoutItemImg" src={listItem.image} alt="" />
              <div className="checkoutItemName">{listItem.name}</div>
              <div className="checkoutDescription">{listItem.description}</div>
              {/* <div className="quantity">Quantity: {listItem.quantity}</div> */}
              <form onSubmit={stopSubmit}>
                <label htmlFor="checkoutItemQuantity">Quantity: </label>
                <input
                  type="number"
                  name={listItem.id}
                  id="checkoutItemQuantity"
                  min="0"
                  max="20"
                  required
                  onChange={updateQuantityAmt}
                  value={listItem.quantity}
                />
              </form>
              <div className="checkoutItemTotal">
                {" "}
                Item Total : ${" "}
                {(Number(listItem.price) * listItem.quantity).toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
