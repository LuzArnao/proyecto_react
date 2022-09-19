import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Item = ( { producto, descuento } ) => {

    function formatNumber(valor) {
        return valor.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }

  return (

    <div id={producto.id} className='productoListado col-lg-4 col-md-6 col-sm-12 pb-1'>
        <div  className='card product-item border-0 mb-4'>
            <div className='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                <img className='img-fluid' src={producto.imagen} alt=''></img>
            </div>
            <div className='card-body border-left border-right text-center p-0 pt-4 pb-3'>
                <h6 className='text-truncate mb-3'>{producto.nombre}</h6>
                <div className='d-flex justify-content-center'>
                    <h6><del>${formatNumber(producto.precio)}</del> - ${formatNumber(producto.precio*descuento)}</h6><h6 className='text-muted ml-2'></h6>
                </div>
            </div>
            <a style={{height:55}} id={producto.id} className='btn btn-sm text-dark p-0 border-left border-right border-bottom '><div className="text-primary" style={{paddingRight: 5}}><Link to={`/item/${producto.id}`}><FontAwesomeIcon icon={faEye}/></Link></div><Link to={ `/item/${producto.id}`}>Ver Detalle</Link></a>
            
        </div>   
    </div>
    
  )
}

export default Item;