import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router"
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Wish from '../pages/Wish'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path='/wish' element={<Wish/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router