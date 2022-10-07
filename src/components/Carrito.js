import React, { useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../app/CartContext' 
import { formatNumber } from '../app/Funciones'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { items, removeItem } = useContext(AppContext);
    const costoTotal = items.reduce((total, currentValue) => total = total + currentValue.precio*currentValue.cantidad,0);

  return (
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className={items['length'] === 0 ? 'col-lg-12 table-responsive mb-5' : 'col-lg-8 table-responsive mb-5'}>
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
                                    <td className="align-middle"><div className="align-middle" style={{display: 'flex', justifyContent: 'space-evenly'}}><img src={item.imagen} alt="" style={{width: 50}}></img><Link style={{textAlign: 'center', margin: 'auto'}} to={`/item/${item.id}`}>{item.nombre}</Link></div></td>
                                    <td className="align-middle">$ {formatNumber(item.precio)}</td>
                                    <td className="align-middle">{item.cantidad}</td>
                                    <td className="align-middle">$ {formatNumber(item.precio*item.cantidad)}</td>
                                    <td className="align-middle"><button key={item.id} id={item.id} className="btn btn-sm btn-primary" onClick={() => removeItem(item.id)} ><FontAwesomeIcon icon={faTrash}/></button></td>
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
            {
                items['length'] > 0 &&

                <div className="col-lg-4">
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Resumen</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">$ {
                        
                                items['length'] === 0 ? 0 : formatNumber(costoTotal)

                            }</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Envio</h6>
                            <h6 className="font-weight-medium">$ 1.000</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Subtotal + Envio</h5>
                            <h5 className="font-weight-bold">$ {
                                items['length'] === 0 ? 0 : formatNumber(costoTotal+1000)
                            }</h5>
                        </div>
                        <Link to={`/checkout`}><button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button></Link>
                    </div>
                </div>
            </div>

            }
            
        </div>
    </div>
  )
}

export default Carrito;