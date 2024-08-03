import React from "react";
import Card from "./Card";
import data from "../Data/Data";

const Header = ({ content }) => {
  return (
    <div className="container text-center my-4">
      <h1 className="justify-content-center">Header</h1>
      <p>Name: {content.name}</p>
      <p>Email: {content.email}</p>
    </div>
  );
};

export default Header;
