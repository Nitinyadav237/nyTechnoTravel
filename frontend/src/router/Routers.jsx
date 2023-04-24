import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Tours from "./../pages/Tours";
import Home from "./../pages/Home";
import TourDetail from "./../pages/TourDetail";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<FeaturedTourList />} />

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
      </Routes>
    </>
  );
};

export default Routers;
