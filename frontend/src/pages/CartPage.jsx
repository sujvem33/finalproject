import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { getUserId } from "../utilities/users-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../style.css";

function CartPage({ cart, setCart }) {
  //google pay
  // const paymentRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: "CARD",
  //       parameters: {
  //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //         allowedCardNetworks: ["MASTERCARD", "VISA"],
  //       },
  //       tokenizationSpecification: {
  //         type: "PAYMENT_GATEWAY",
  //         parameters: {
  //           gateway: "example",
  //           gatewayMerchantId: "exampleGatewayMerchantId",
  //         },
  //       },
  //     },
  //   ],
  //   merchantInfo: {
  //     merchantId: "12345678901234567890",
  //     merchantName: "Demo Merchant",
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: "FINAL",
  //     totalPriceLabel: "Total",
  //     totalPrice: "100.00",
  //     currencyCode: "USD",
  //     countryCode: "US",
  //   },
  // };

  function handleLoadPaymentData(paymentData) {
    console.log("load payment data", paymentData);
  }
  const handleRemove = (element) => {
    const arr = cart.filter((item) => item.name !== element.name);
    setCart(arr);
  };


  // google pay end
  const navigate = useNavigate();
  const id = getUserId();
  const productList = cart
    ? cart.map((element) => {
        return (
          <>
            <div className="cartcomponents">
              <div className="cartnamedisplay">{element.name}</div>
              <div>{element.color}</div>
              <div>₹{element.price}</div>
              <button
                className="cartbutton"
                onClick={() => handleRemove(element)}
              >
                Remove
              </button>

              <br />
            </div>
            <br />
          </>
        );
      })
    : [];

  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
  }, [id]);

  const load = () => {
    return (
      <>
      <div className="cartContainer">
      
        <br />
        <div>
          <div>{productList}</div>
        </div>
        </div>
        <h2>
          Total Price: ₹
          {cart.reduce((total, element) => total + parseInt(element.price), 0)}
        </h2>
        <br /> <br />
        <a href="/payments" className="button">
          Proceed to Check Out
        </a>
        <br />
        <br />
      </>
    );
  };
  const loading = () => {
    return (
      <>
        <br />
        <br />
        <h4> </h4>
        <br />
        <div>
          <div>{productList}</div>
        </div>
        <h2>Cart is empty</h2>
        <br /> <br />
        <a href="/" className="button">
          Continue Shopping
        </a>
        <br />
        <br />
        <br />
      </>
    );
  };

  return cart.length > 0 ? load() : loading();
}

export default CartPage;
