import React, { useEffect, useState } from 'react'

const Wish = () => {
    const [wish, setWish] = useState([]) 

    useEffect(() =>{
        const Wish =JSON.parse(localStorage.getItem('wish')) || []
        setWish(Wish)
    },[])

    const updateLocalStorage = (updatedWish) => {
      localStorage.setItem("wish", JSON.stringify(updatedWish));
    };


    const removeProduct = (index) => {
      const updatedWish = [...wish];
      updatedWish.splice(index, 1);
      setWish(updatedWish);
      updateLocalStorage(updatedWish);
    };

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        <h2>Wish</h2>
        {wish.length === 0 ? (
        <p>No items in basket.</p>
      ) : (
        wish.map((product, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL6T1wzeh7wV0CNtaRXBcLteMGHCflwPneQ&s" alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() =>removeProduct(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  )
}

export default Wish