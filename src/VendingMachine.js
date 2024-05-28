// src/VendingMachine.js
import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css'; // Add this for styling (create the CSS file if needed)

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <img src="/VendingMachine.jpg" alt="Vending Machine" className="vending-machine-image" />
      <ul>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/soda">Diet Coke</Link></li>
        <li><Link to="/candy">Snickers</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
