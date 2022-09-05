import React, { useEffect, useState } from 'react'
import Item from './Item';

const descuento = 0.80
const ItemList = () => {

  const [ productos, setProductos ] = useState([]);
  useEffect(() => {
      const promesa = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(
                  [   
                      {"id": 1, "nombre": "Juguetes Kit Castigo", "color": "Negro", "tallas": [{"S": 9},{"M": 6},{"L": 5}], "precio": "9000", "imagen": "../img/product-1.jpg"},
                      {"id": 2, "nombre": "Juguetes Kit Coneja", "color": "Negro", "tallas": [{"S": 7},{"M": 0},{"L": 4}], "precio": "9500", "imagen": "../img/product-2.jpg"},
                      {"id": 3, "nombre": "Juguetes Kit Dulce Sueño", "color": "Rojo","tallas": [{"S": 5},{"M": 8},{"L": 6}], "precio": "11200", "imagen": "../img/product-3.jpg"},
                      {"id": 4, "nombre": "Juguetes Kit Diabla", "color": "Rojo", "tallas": [{"S": 6},{"M": 7},{"L": 4}], "precio": "8000", "imagen": "../img/product-4.jpg"},
                      {"id": 5, "nombre": "Juguetes Kit Escape", "color": "Amarillo", "tallas": [{"S": 3},{"M": 1},{"L": 7}], "precio": "7500", "imagen": "../img/product-5.jpg"},
                      {"id": 6, "nombre": "Juguetes Kit Algodon Dulce", "color": "Rosa", "tallas": [{"S": 4},{"M": 2},{"L": 5}], "precio": "10000", "imagen": "../img/product-6.jpg"},
                      {"id": 7, "nombre": "Juguetes Kit Mienteme Despacio", "color": "Negro", "tallas": [{"S": 6},{"M": 5},{"L": 3}], "precio": "9500", "imagen": "../img/product-7.jpg"},
                      {"id": 8, "nombre": "Juguetes Kit Guerrera", "color": "Rojo", "tallas": [{"S": 8},{"M": 4},{"L": 7}], "precio": "6900", "imagen": "../img/product-8.jpg"},
                      {"id": 9, "nombre": "Juguetes Kit Sorpresa", "color": "Negro", "tallas": [{"S": 10},{"M": 5},{"L": 2}], "precio": "11000", "imagen": "../img/product-9.jpg"}
                  ]
              );
              },2000)
      })
      promesa.then(result => setProductos(result))
      ;
  },[])

  return (
    
    productos.map(producto => 

       <Item id={producto.idb } imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} precioDescuento={producto.precio*descuento} stockTotal={producto.tallas[0]["S"]+producto.tallas[1]["M"]+producto.tallas[2]["L"]}/>  

    )
  
  )
}

export default ItemList;