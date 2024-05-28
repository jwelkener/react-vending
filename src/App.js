// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
