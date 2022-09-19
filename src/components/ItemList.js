import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getProducts } from "../app/Funciones";


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

       <Item key={producto.id} producto={producto} descuento={descuento}/>  

    )
  
  )
}

export default ItemList;