import React from "react";

import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import Home from "../pages/Home";
import ListingAffaire from "./../pages/ListingAffaire";
import { AddAffaire } from "./../pages/AddAffaire";
import { Login } from "./../pages/Login";
import DetailAffaire from "./../pages/DetailAffaire";
import Profile from "./../pages/Profile";
const NavbarHeader = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/affaires" element={<ListingAffaire />} />
        <Route path="/addaffaire" element={<AddAffaire />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detailaffaire" element={<DetailAffaire />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </div>
  );
};

export default NavbarHeader;
