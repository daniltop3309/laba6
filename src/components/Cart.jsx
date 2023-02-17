import React from "react";

function Cart({ cart, setCart, register, order, setOrder }) {
  function addToOrder() {
    setOrder(cart);
    
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
          <button onClick={() => addToOrder()}></button>
        </div>
      ) : (
        "no access"
      )}
      
    </div>
  );
}

export default Cart;
