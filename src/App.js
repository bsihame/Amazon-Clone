import "./App.css";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
