import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <div className="col-lg-10 col-md-9 row" style={{display: "flex", direction: "row", margin: "auto" }}>
      
        <ItemList />
      
      
    </div>
  )
}

export default ItemListContainer;