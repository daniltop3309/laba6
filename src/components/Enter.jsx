import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Enter({ account, setAccount, register, setRegister }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("green");
  const onSubmit = (e) => {
    e.preventDefault();
    if (account[0] === name && account[1] === password) {
      setRegister(true);
      navigate("/");
    } else {
      setColor("red");
    }
    setName("");
    setPassword("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        style={{ borderColor: color }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        style={{ borderColor: color }}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {color === "red" ? (
        <label htmlFor="" style={{ color: "red" }}>
          Неправильные данные
        </label>
      ) : (
        ""
      )}
      <button type="submit">Войти</button>
    </form>
  );
}

export default Enter;
