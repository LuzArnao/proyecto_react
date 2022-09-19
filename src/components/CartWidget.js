import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link to={`/cart`}><div style={{display: "flex", flexDirection: "row"}}>
        <div style={{paddingRight: 5}}><FontAwesomeIcon icon={faShoppingCart}/></div>
        <div>0</div>
    </div></Link>
  )
}

export default CartWidget;