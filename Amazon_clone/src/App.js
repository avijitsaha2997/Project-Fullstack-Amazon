import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
function App() {
  return (

    <div className="app">

      <Routes>

        <Route path="/" element={
          <div>
            <Header />
            <Home />
          </div>
        }>
        </Route>
        <Route path="/login" element={
          <div>
            <Login/>
          </div>
        }>
        </Route>

        <Route path="/checkout" element={
          <div>
            <Header />
            <Checkout />
          </div>
        }>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
