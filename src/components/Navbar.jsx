import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ register, setRegister }) {
  const navigate = useNavigate();
  function logout() {
    setRegister(false);
    navigate("/enter");
  }
  return (
    <div>
      {!register ? (
        <div>
          <Link to="/">Домой</Link>
          <Link to="/register">Зарегистрироваться</Link>
          <Link to="/enter">Войти</Link>
        </div>
      ) : (
        <div>
          <Link to="/">Домой</Link>
          <Link to="/cart">Корзина</Link>
          <Link to="/order">Заказ</Link>
          <button onClick={() => logout()}>Выйти из аккаунта</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
