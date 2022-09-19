import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProducts } from '../app/Funciones';

const ItemDetailContainer = ( { id } ) => {
  const descuento = 0.80
  const [ productos, setProductos ] = useState([]);
  useEffect(() => {
    setTimeout(() => {

      getProducts().then(res => setProductos(res))

    },2000)
      ;
  },[])

  return (
    
    productos.filter(producto => producto.id == id).map(productoFiltrado => (

       <ItemDetail key={productoFiltrado.id} producto={productoFiltrado} descuento={descuento} />  

    )
  
  ))
}

export default ItemDetailContainer;