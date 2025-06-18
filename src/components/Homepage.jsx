import React from "react";
import NavBar from "./NavBar";
import Container from "./Container";
import CardDetail from "./CardDetail";
import { Routes, Route } from "react-router-dom";

const Homepage = ({ cardInfo }) => {
  return (
    <>
      <NavBar />
      <Container cardInfo={cardInfo} />
    </>
  );
};

export default Homepage;
