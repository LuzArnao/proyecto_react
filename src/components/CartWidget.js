import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{paddingRight: 5}}><FontAwesomeIcon icon={faShoppingCart}/></div>
        <div>0</div>
    </div>
  )
}

export default CartWidget;