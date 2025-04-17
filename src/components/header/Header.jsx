import React from 'react'
import { Link } from 'react-router';


const Header = () => {
  return (
    <div>
        <div>
            <Link to ="/">Home</Link>
            <Link to="/basket">Basket</Link>
            <Link to="/wish">Wish</Link>
        </div>
        
    </div>
  )
}

export default Header