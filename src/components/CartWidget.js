import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/CartContext' 

const CartWidget = () => {
  const { items, addItem, removeItem, clear } = useContext(AppContext);
  return (
    <Link to={`/cart`}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{paddingRight: 5}}><FontAwesomeIcon icon={faShoppingCart}/></div>
        <div>{items['length']}</div>
      </div>
    </Link>
  )
}

export default CartWidget;