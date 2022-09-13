import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getProducts } from "../app/funciones";


const ItemList = () => {
  const descuento = 0.80
  const [ productos, setProductos ] = useState([]);
  useEffect(() => {
    setTimeout(() => {

      getProducts().then(res => setProductos(res))

    },2000)
      ;
  },[])

  return (
    
    productos.map(producto => 

       <Item key={producto.id} id={producto.id} imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} precioDescuento={producto.precio*descuento}/>  

    )
  
  )
}

export default ItemList;