import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../app/CartContext' 
import { formatNumber } from '../app/Funciones'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { items, clear } = useContext(AppContext);
    
    console.log(items['length'])

  return (
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {

                            items['length'] === 0 ? <tr id='compraVacia'>Debes Agregar Elementos Al Carrito</tr> :
                            items.map(item => 
                                <tr key={item.id}>
                                    <td className="align-middle"><div className="align-middle" style={{display: 'flex', justifyContent: 'space-evenly'}}><img src={item.imagen} alt="" style={{width: 50}}></img>{item.nombre}</div></td>
                                    <td className="align-middle">$ {formatNumber(item.precio)}</td>
                                    <td className="align-middle">{item.cantidad}</td>
                                    <td className="align-middle">$ {formatNumber(item.precio*item.cantidad)}</td>
                                    <td className="align-middle"><button key={item.id} id={item.id} className="btn btn-sm btn-primary" ><FontAwesomeIcon icon={faTrash}/></button></td>
                                </tr>
                        )
                        }         
                    </tbody>
                </table>
                {
                    items['length'] === 0 ? <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Link to={`/`}><button className="btn btn-block btn-primary my-3 py-3">Ir a Comprar</button></Link>
                    </div> : <br></br>
                }
            </div>
            <div className="col-lg-4">
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Resumen</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">$ {
                        
                                items['length'] === 0 ? 0 : formatNumber(items[0].precio*items[0].cantidad)

                            }</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Envio</h6>
                            <h6 className="font-weight-medium">$ 10.000</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="font-weight-bold">$ {
                                items['length'] === 0 ? 0 : formatNumber(items[0].precio*items[0].cantidad+10000)
                            }</h5>
                        </div>
                        <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carrito;