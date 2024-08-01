import React from "react";
import "./App.css";
import Header from "./Components/Header";

function App() {
  let content = {
    name: "Shahzaib",
    email: "shahzaibmuhammad627@gmail.com",
  };

  return (
    <>
      <Header content={content} />
    </>
  );
}

export default App;
