import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/CartContext' 

const CartWidget = () => {
  const { items } = useContext(AppContext);
  const cantidadItems = items.reduce((total, valorActual) => total = total + valorActual.cantidad*1,0);

  return (
    <Link to={`/cart`}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{paddingRight: 5}}><FontAwesomeIcon icon={faShoppingCart}/></div>
        <div>{cantidadItems}</div>
      </div>
    </Link>
  )
}

export default CartWidget;