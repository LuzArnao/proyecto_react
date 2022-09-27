import React, { useEffect, useState } from 'react';
import Item from './Item';
import loadingLogo from "../assets/loading.svg"
import { getItems } from '../app/api';


const ItemList = ({color}) => {

  
  console.log(color && color.color)

  

  const categoria = ['Amarillo', 'Negro', 'Rosa', 'Rojo']


  const descuento = 0.80
  const [ productos, setProductos ] = useState();

  useEffect(() => {
      getItems().then(res => setProductos(res))
  },[])

  return (
    
    !productos?<div style={{textAlign: 'center'}}><img alt="" src={loadingLogo}/></div> :
    color?productos.filter(producto => producto.color === color.color).map(filteredName => (
      
        <Item key={filteredName.id} producto={filteredName} descuento={descuento}/>  
      
    )):

      productos.map(producto => 
      
       <Item key={producto.id} producto={producto} descuento={descuento}/>  

    ) 
  
  )
}

export default ItemList;