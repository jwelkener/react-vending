// src/Chips.js
import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
	  <img src="/chips.jpeg" alt="Chips" />
      <p>Crunchy and salty!</p>
      <Link to="/">Go back to the Vending Machine</Link>
    </div>
  );
}

export default Chips;
