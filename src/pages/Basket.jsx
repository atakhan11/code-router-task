import React, { useEffect, useState } from 'react';

const Basket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);

  const updateLocalStorage = (updatedBasket) => {
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const removeProduct = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
    updateLocalStorage(updatedBasket);
  };

  const increaseCount = (index) => {
    const updatedBasket = [...basket];
    updatedBasket[index].count = (updatedBasket[index].count || 1) + 1;
    setBasket(updatedBasket);
    updateLocalStorage(updatedBasket);
  };

  const decreaseCount = (index) => {
    const updatedBasket = [...basket];
    if ((updatedBasket[index].count || 1) > 1) {
      updatedBasket[index].count -= 1;
      setBasket(updatedBasket);
      updateLocalStorage(updatedBasket);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>No items in basket.</p>
      ) : (
        basket.map((product, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px 0", padding: "10px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL6T1wzeh7wV0CNtaRXBcLteMGHCflwPneQ&"
              alt={product.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Count: {product.count || 1}</p>
            <div>
              <button onClick={() => decreaseCount(index)}>-</button>
              <button onClick={() => increaseCount(index)}>+</button>
              <button onClick={() => removeProduct(index)} style={{ marginLeft: "10px", color: "red" }}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Basket;
