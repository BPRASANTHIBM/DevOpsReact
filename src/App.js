import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./House/Components/Home";
import HouseListing from "./House/Components/HouseListing";
import Nav from "./House/Components/Nav";
import AddHouse from "./House/Components/AddHouse";
import Search from "./House/Components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addhouse" element={<AddHouse />} />
          <Route path="/addMgt" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/update/:id" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/updateMgt/:id" element={<Home />} />
          <Route path="/house" element={<HouseListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
