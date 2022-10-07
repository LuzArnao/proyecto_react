import React from 'react'
import ItemList from './ItemList';
import { useNavigate } from 'react-router-dom';

const ItemListContainer = ({color}) => {

  const categoria = ['Amarillo', 'Negro', 'Rosa', 'Rojo', 'Blanco']

  const navigate = useNavigate();

    const pulsado = (ruta) => {
        navigate(process.env.PUBLIC_URL+ruta);
    }

  return (
    
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
          {/* <!-- Shop Sidebar Start --> */}
          <div className="col-lg-2 col-md-12">

              {/* <!-- Color Start --> */}
              <div className="border-bottom mb-4 pb-4">

              <div className="card-header border-0">
                        <h4 className="font-weight-semi-bold m-0">Categorias</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="categorias" id="todos" onClick={() => pulsado(`/`)}></input>
                                <label className="custom-control-label" htmlFor="todos">Todos</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="categorias" id="amarillo" onClick={() => pulsado(`/category/${categoria[0]}`)}></input>
                                <label className="custom-control-label" htmlFor="amarillo">Amarillo</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="categorias" id="rosa" onClick={() => pulsado(`/category/${categoria[2]}`)}></input>
                                <label className="custom-control-label" htmlFor="rosa">Rosa</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="categorias" id="rojo" onClick={() => pulsado(`/category/${categoria[3]}`)}></input>
                                <label className="custom-control-label" htmlFor="rojo">Rojo</label>
                            </div>
                        </div>
                    </div>
              </div>
          </div>

          {/* Shop Product Start */}

          <div className="col-lg-10 col-md-12">
              <div className="mostrarProductos row pb-3">
                <ItemList color={color} />
              </div>
            </div> 
      </div>
          {/* Shop Product End */}

    </div>   
  )
}

export default ItemListContainer;