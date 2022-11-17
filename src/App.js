import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBet from "./pages/CreateBet";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Bets from "./pages/Bets";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBet" element={<CreateBet />} />
        <Route path="/bets" element={<Bets />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
