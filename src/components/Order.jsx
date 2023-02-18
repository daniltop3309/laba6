import React from 'react'

function Order({ order }) {

  return (
    <div>
      {order.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Order