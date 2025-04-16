import React, { useEffect, useState } from 'react'

const Basket = () => {
  const [basket, setBasket] = useState([])

  useEffect(() => {
    const Basket = JSON.parse(localStorage.getItem("basket")) || []
    setBasket(Basket)
  }, [])

  return (
    <div style={{display: "flex"}}>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>No items in basket.</p>
      ) : (
        basket.map((product, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL6T1wzeh7wV0CNtaRXBcLteMGHCflwPneQ&s" alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Basket
