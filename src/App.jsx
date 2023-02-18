import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Register from "./components/Register";
import Enter from "./components/Enter";
import Navbar from "./components/Navbar";


function App() {
  const [account, setAccount] = useState([]);
  const [register, setRegister] = useState(true);
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  return (
    <BrowserRouter>
      <Navbar register={register} setRegister={setRegister} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              catalog={catalog}
              setCatalog={setCatalog}
              register={register}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Register
              account={account}
              setAccount={setAccount}
              setRegister={setRegister}
            />
          }
        />
        <Route
          exact
          path="/enter"
          element={
            <Enter
              account={account}
              setAccount={setAccount}
              register={register}
              setRegister={setRegister}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} register={register} order={order} setOrder={setOrder} />}
        />
        <Route exact path="/order" element={<Order order={order} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
