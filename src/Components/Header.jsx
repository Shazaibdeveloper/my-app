import React from "react";
import Card from "./Card";
import data from "../Data/Data";

const Header = ({ content }) => {
  return (
    <div className="container text-center">
      <h1>Header</h1>
      <p>Name: {content.name}</p>
      <p>Email: {content.email}</p>
      <Card data={data} />
    </div>
  );
};

export default Header;
