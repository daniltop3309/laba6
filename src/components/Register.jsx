import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register({ account, setAccount, setRegister }) {
  const [colorRegister, setColorRegister] = useState("green");
  const [colorName, setColorName] = useState("green");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (password.length >= 8 && name.length >= 3) {
      let copy = Object.assign([], account);
      copy.push(name);
      copy.push(password);
      setAccount(copy);
      setRegister(true);
      navigate("/enter");
    } else {
      setColorRegister("red");
      setColorName("red");
    }
    setName("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            style={{ borderColor: colorName }}
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}/>
          <label>
            {colorName === "red" ? "Большe 3 символов" : ""}
          </label>
        </div>

        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            style={{ borderColor: colorRegister }}
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}/>
          <label>
            {colorRegister === "red" ? "Большe 8 символов" : ""}
          </label>
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Register;
