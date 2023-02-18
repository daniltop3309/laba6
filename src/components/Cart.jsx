import React from "react";

function Cart({ cart, setCart, register, order, setOrder }) {
  function addToOrder() {
    setOrder(cart);
    setCart([]);
  }
  return (
    <div>
      {register ? (
        <div>
          {cart.map((pet, index) => (
            <div key={index}>
              <p>{pet.name}</p>
              <p>{}</p>
            </div>
          ))}
          {cart.length !== 0 ? <button onClick={() => addToOrder()}>Сделать заказ</button> : ''}
        </div>
      ) : (
        "no access"
      )}
      
    </div>
  );
}

export default Cart;
