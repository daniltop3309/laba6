import React, { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader";

function Main({ catalog, setCatalog, register, cart, setCart }) {
  const [full, setFull] = useState(false);
  function addToCart(pet) {
    cart.length !== 0
      ? cart.map((item) => {
          if (item.id === pet.id) {
            alert('Уже добавлено');
          } else {
            setCart([...cart, pet]);
          }
        })
      : setCart([...cart, pet]);
  }
  useEffect(() => {
    fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=pending")
      .then((api) => api.json())
      .then((json) => {
        setCatalog(json);
        setFull(true);
      });
  });

  return (
    <div>
      {full ? (
        catalog.map((pet, index) => (
          <div key={index}>
            <p>Id: {pet.id}</p>
            <p>Name: {pet.name}</p>
            {register ? (
              <>
                <button onClick={() => addToCart(pet)}>
                  Добавить в корзину
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Main;
