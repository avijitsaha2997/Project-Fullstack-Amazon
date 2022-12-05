import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

const promise = loadStripe("pk_test_51MBETiEoO1u2OXgF56vA9R8oa5gawIYbyeSzpAh5vlRZkpfhB5SjY2j3hBorOUADQ5lapilnGfcVdzY6CjzeJUah00gqdV59HI");

function App() {
  // eslint-disable-next-line no-empty-pattern, no-unused-vars
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is>>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

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
        <Route path="/payment" element={
          <div>
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </div>
        }>
        </Route>

      </Routes>
    </div>

  );
}

export default App;
