import React, { useContext, useState } from 'react'
import { AppContext } from '../app/CartContext'
import { formatNumber } from '../app/funciones' 
import { createOrder } from '../app/api';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Checkouts = () => {

    const { items, clear } = useContext(AppContext);

    const impuestos = 0.15
    const envio = 1000
    const costoTotalLibre = items.reduce((total, item) => total = total + item.precio*item.cantidad,0);
    const costoTotal = (costoTotalLibre + (costoTotalLibre*impuestos)) + envio

    const [ comprador, setComprador ] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        direccion1: '',
        direccion2: '',
        pais: '',
        localidad: '',
        estado: '',
        postal: ''
        }
    );

    const ejecutarCompra = async (e) => {
        const fecha = new Date()
        e.preventDefault()
        createOrder(comprador, fecha, items, costoTotal).then(res => {
            Swal.fire({
                title: 'Gracias por tu Compra!' ,
                text: 'Guia: ' + res,
                icon: 'success',
                showConfirmButton: false,
                footer: '<a href="/">Volver al Inicio</a>'
                }
            )
            clear()
        })
        
    }

    
  return (

    items['length'] === 0 ? <div>
    <div id='compraVacia' style={{textAlign: 'center'}} >No hay elementos parar mostrar</div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Link to={`/`}><button className="btn btn-block btn-primary my-3 py-3">Ir a Comprar</button></Link></div></div> :

    <div className="container-fluid pt-3">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <div className="mb-4">
                    <h4 className="font-weight-semi-bold mb-4">Datos de Compra</h4>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Primer Nombre</label>
                            <input className="form-control" type="text" placeholder="John" value={comprador.nombre} onChange={(e) => setComprador({...comprador, nombre: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Apellido</label>
                            <input className="form-control" type="text" placeholder="Doe"  value={comprador.apellido} onChange={(e) => setComprador({...comprador, apellido: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" placeholder="ejemplo@email.com" value={comprador.correo} onChange={(e) => setComprador({...comprador, correo: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Celular</label>
                            <input className="form-control" type="text" placeholder="+123 456 789" value={comprador.telefono} onChange={(e) => setComprador({...comprador, telefono: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Direccion 1</label>
                            <input className="form-control" type="text" placeholder="Avenida o Calle" value={comprador.direccion1} onChange={(e) => setComprador({...comprador, direccion1: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Direccion 2</label>
                            <input className="form-control" type="text" placeholder="Altura, Casa o Departamento" value={comprador.direccion2}  onChange={(e) => setComprador({...comprador, direccion2: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Pais</label>
                            <input className="form-control" type="text" placeholder="Pais" value={comprador.pais}  onChange={(e) => setComprador({...comprador, pais: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Localidad</label>
                            <input className="form-control" type="text" placeholder="CABA" value={comprador.localidad}  onChange={(e) => setComprador({...comprador, localidad: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Estado</label>
                            <input className="form-control" type="text" placeholder="Buenos Aires" value={comprador.estado}  onChange={(e) => setComprador({...comprador, estado: e.target.value})}></input>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Codigo Postal</label>
                            <input className="form-control" type="text" placeholder="1022" value={comprador.postal}  onChange={(e) => setComprador({...comprador, postal: e.target.value})}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-secondary mb-4">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Total a Pagar</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="font-weight-medium mb-3">Resumen de Productos</h5>

                        {items.map(item => 
                            <div key={item.id} className="d-flex justify-content-between">
                                <p>{item.nombre}</p>
                                <p>{item.cantidad}</p>
                                <p>$ {formatNumber(item.precio*item.cantidad)}</p>
                            </div>
                        )}

                        <hr className="mt-0"></hr>
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">$ {formatNumber(costoTotalLibre)}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Envio</h6>
                            <h6 className="font-weight-medium">$ 1.000</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Impuestos</h6>
                            <h6 className="font-weight-medium">$ {formatNumber(costoTotalLibre*impuestos)}</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="font-weight-bold">$ {formatNumber(costoTotal)}</h5>
                        </div>
                    </div>
                </div>
                <div className="card border-secondary mb-5">
                    <div className="card-footer border-secondary bg-transparent">
                        <button className="btn btn-lg btn-block btn-primary font-weight-bold my-1 py-3" onClick={ejecutarCompra}>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkouts