import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'

const Item = ( { id, imagen, nombre, precio, precioDescuento, stockTotal } ) => {

    function formatNumber(valor) {
        return valor.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }

  return (

    <div id={id} className='productoListado col-lg-4 col-md-6 col-sm-12 pb-1'>
        <div  className='card product-item border-0 mb-4'>
            <div className='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                <img className='img-fluid' src={imagen} alt=''></img>
            </div>
            <div className='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                <h6 className='text-truncate mb-3'>{nombre}</h6>
                <div className='d-flex justify-content-center'>
                    <h6>{formatNumber(precioDescuento)} $</h6><h6 className='text-muted ml-2'> - <del>{formatNumber(precio)} $</del></h6>
                </div>
            </div>
                <ItemCount stock={stockTotal} initial='1'/>
        </div>   
    </div>
    
  )
}

export default Item;