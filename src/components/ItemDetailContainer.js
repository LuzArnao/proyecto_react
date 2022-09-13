import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProducts } from '../app/funciones';

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
    
    productos.filter(producto => producto.id == id ).map(pFiltro => (

       <ItemDetail key={pFiltro.id} id={pFiltro.id} imagen={pFiltro.imagen} nombre={pFiltro.nombre} precio={pFiltro.precio} precioDescuento={pFiltro.precio*descuento} stockTotal={pFiltro.tallas[0]["S"] + pFiltro.tallas[1]["M"] + pFiltro.tallas[2]["L"]} />  

    )
  
  ))
}

export default ItemDetailContainer;