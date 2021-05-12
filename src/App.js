import "./App.scss";
import Header from "./components/Header";
import card from "./assets/card.svg";
import dots from "./assets/dots.svg";
import React, { useState, useEffect } from "react";

function generateRandomCard() {
  const n1 = Math.floor(Math.random() * (10000 - 1000) + 1000);
  const n2 = Math.floor(Math.random() * (10000 - 1000) + 1000);
  const n3 = Math.floor(Math.random() * (10000 - 1000) + 1000);
  const n4 = Math.floor(Math.random() * (10000 - 1000) + 1000);
  return `${n1} ${n2} ${n3} ${n4}`;
}

function App() {
  const [clicked, setClicked] = useState(false);
  const [cardInfo, setCardInfo] = useState(generateRandomCard());

  useEffect(() => {
    setCardInfo(generateRandomCard());
  }, [clicked]);

  const handleRefreshClick = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <h3 className="title">
          select you <span className="title--underline">clock</span> card
        </h3>
        <div className="circle">
          <div className="circle circle--secondary"></div>
          <div className={`dot ${clicked ? "dot--reset" : ""}`}></div>
          <div className="card-div">
            <img src={card} alt="card svg" />
          </div>
        </div>
        <div className="card-div__numbers">
          <div
            className="card-div__number-box"
            onClick={() => {
              navigator.clipboard.writeText(cardInfo);
              alert("card number copied to clipboard");
            }}
          >
            <p className="card-div__text">{cardInfo}</p>
          </div>
          <div className="card-div__lower-box">
            <div
              className="card-div__pin"
              onClick={() => {
                navigator.clipboard.writeText(cardInfo);
                alert("card security code copied to clipboard");
              }}
            >
              <p className="card-div__text-p">348</p>
            </div>
            <div
              className="card-div__expiry"
              onClick={() => {
                navigator.clipboard.writeText(cardInfo);
                alert("card expiring date copied to clipboard");
              }}
            >
              <p className="card-div__text-p">12/23</p>
            </div>
          </div>
        </div>
        <button className="refresh-button" onClick={handleRefreshClick}>
          Refresh Card Details
        </button>
        <h4 className="refresh-title">refresh in {clicked ? 30 : 10} days</h4>
        <div className="dots-container">
          <img className="dots" src={dots} alt="dots svg" />
        </div>
      </main>
    </div>
  );
}
//312
export default App;

// style={clicked ? {backgroundImage='./assets/circle.gif'} : {backgroundImage='./assets/circle.svg'}}
