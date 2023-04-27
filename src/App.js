import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />}>
            Shop her
          </Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<Header />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
