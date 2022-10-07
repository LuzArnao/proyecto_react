import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getItems } from '../app/api';

const ItemDetailContainer = ( { id } ) => {

  const descuento = 0.80

  const [ productos, setProductos ] = useState([]);

  useEffect(() => {
    getItems().then(res => setProductos(res))
  },[])

  return (
    
    productos.filter(producto => producto.id === id).map(productoFiltrado => (

       <ItemDetail key={productoFiltrado.id} producto={productoFiltrado} descuento={descuento} />  

    )
  
  ))
}

export default ItemDetailContainer;