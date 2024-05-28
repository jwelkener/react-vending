// src/Soda.js
import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
	  <img src="/diet-coke.jpeg" alt="Diet Coke" />
      <p>Cold and refreshing!</p>
      <Link to="/">Go back to the Vending Machine</Link>
    </div>
  );
}

export default Soda;
