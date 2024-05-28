// src/Candy.js
import React from 'react';
import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div>
      <h1>Candy</h1>
	  <img src="/snickers.png" alt="Snickers" />
      <p>Sweet and delicious!</p>
      <Link to="/">Go back to the Vending Machine</Link>
    </div>
  );
}

export default Candy;
