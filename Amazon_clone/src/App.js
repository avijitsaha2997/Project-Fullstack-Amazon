import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (

    <div className="app">
      <Header />
      <Routes>

        <Route path="/" element={
          <div>
            <Home />
          </div>
        }>
        </Route>

        <Route path="/checkout" element={
          <div>
            <Checkout />
          </div>
        }>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
