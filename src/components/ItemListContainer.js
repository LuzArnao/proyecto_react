import React, { useState } from 'react'
import ItemList from './ItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ItemListContainer = ({color}) => {

  const [ nombre, setNombre ] = useState(false);
  const categoria = ['Amarillo', 'Negro', 'Rosa', 'Rojo', 'Blanco']

  return (
    
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
          {/* <!-- Shop Sidebar Start --> */}
          <div className="col-lg-2 col-md-12">

              {/* <!-- Color Start --> */}
              <div className="border-bottom mb-4 pb-4">
                  <h5 className="font-weight-semi-bold mb-4">Categorias</h5>
                    <ul>
                        <li style={{listStyle: 'none'}} ><Link style={{ textDecoration: 'none' }} to={`/`}>Todos</Link></li>
                        <li style={{listStyle: 'none'}} ><Link style={{ textDecoration: 'none' }} to={`/category/${categoria[0]}`}>Amarillo</Link></li>
                        <li style={{listStyle: 'none'}} ><Link style={{ textDecoration: 'none' }} to={`/category/${categoria[1]}`}>Negro</Link></li>
                        <li style={{listStyle: 'none'}} ><Link style={{ textDecoration: 'none' }} to={`/category/${categoria[2]}`}>Rosa</Link></li>
                        <li style={{listStyle: 'none'}} ><Link style={{ textDecoration: 'none' }} to={`/category/${categoria[3]}`}>Rojo</Link></li>
                    </ul>
              </div>
          </div>

          {/* Shop Product Start */}

          <div className="col-lg-10 col-md-12">
              <div className="mostrarProductos row pb-3">
                  {/* <div className="col-12 pb-1">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                          <form action="">
                              <div className="input-group">
                                  <input id="buscaNombre" type="text" className="form-control" placeholder="Buscar por nombre" onChange={e => setNombre(e.target.value)}></input>
                                  <div className="input-group-append">
                                      <span className="input-group-text bg-transparent text-primary">
                                      <FontAwesomeIcon icon={faSearch} />
                                      </span>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div> */}
                <ItemList color={color} />
              </div>
            </div> 
      </div>
          {/* Shop Product End */}

    </div>   
  )
}

export default ItemListContainer;