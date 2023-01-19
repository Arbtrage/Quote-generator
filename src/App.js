import "./App.css";
import { useState } from "react";
import React from "react";

const App = () => {
  const [quote, setQuote] = useState("");

  const getAdvise = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const { advice } = data.slip;
        setQuote(advice);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h3 className="heading">{quote}</h3>
        <button className="button" onClick={getAdvise}>
           <span>Quote</span>
        </button>
      </div>
    </div>
  );
};

export default App;
