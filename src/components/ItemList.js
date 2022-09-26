import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getProducts } from "../app/Funciones";
import loadingLogo from "../assets/loading.svg"
import { getItems } from '../app/api';

const ItemList = () => {
  const descuento = 0.80
  const [ productos, setProductos ] = useState();

  useEffect(() => {
      getItems().then(res => setProductos(res))
  },[])

  return (
    
    !productos?<div style={{textAlign: 'center'}}><img alt="" src={loadingLogo}/></div> :
     productos.map(producto => 

       <Item key={producto.id} producto={producto} descuento={descuento}/>  

    )
  
  )
}

export default ItemList;