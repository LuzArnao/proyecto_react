import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <div style={{display: "flex", direction: "row"}}>
      <ItemList />
    </div>
  )
}

export default ItemListContainer;