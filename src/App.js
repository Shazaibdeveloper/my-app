import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Faq from "./Components/Faq";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Searching from "./Components/Searching";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="card" element={<Card />} />
        <Route path="form" element={<Form />} />
        <Route path="search" element={<Searching />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
