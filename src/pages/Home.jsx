import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/layout/Layout'

const Home = () => {
  const [data, setData] = useState([])

            

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories")
      .then(response => {
        setData(response.data)
      })
      
  }, [])

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      <Layout/>
      {data.map(product => (
        <div key={product.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL6T1wzeh7wV0CNtaRXBcLteMGHCflwPneQ&s" alt="" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => {
            const basket = JSON.parse(localStorage.getItem("basket")) || []
            basket.push(product)
            localStorage.setItem("basket", JSON.stringify(basket))
            
          }}>Add to Basket</button>
          <button onClick={() => {
            const wish = JSON.parse(localStorage.getItem("wish")) || []
            wish.push(product)
            localStorage.setItem("wish", JSON.stringify(wish))
            
          }}>Add to Wish</button>
        </div>
      ))}
    </div>
  )
}

export default Home
