import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/CartContext' 

const ItemDetail = ( { producto, descuento } ) => {
    
    const { items, addItem, isInCart } = useContext(AppContext);
    const cantidadItems = items.reduce((total, valorActual) => total = total + valorActual.cantidad*1,0);

    function formatNumber(valor) {
        return valor.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }

  return (

    <div id={producto.id} style={{padding: 3}} >
         
        <div className="row" style={{width: '95%', margin: 'auto' }} >
            <div className="col-lg-4 pb-5">
                <div className='card product-item border-0 mb-4'>
                    <div className='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                        <img className='img-fluid' src={producto.imagen} alt='imagenProducto'></img>
                    </div>
                </div>  
            </div>

            <div className="col-lg-7 pb-5">
                <h3 style={{textAlign: 'left'}} className="font-weight-semi-bold">{producto.nombre}</h3>
                <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                    </div>
                    <small className="pt-1">(50 Reviews)</small>
                </div>
                <h5 style={{textAlign: 'left'}}><del>Precio Total: ${formatNumber(producto.precio)}</del></h5>
                <h3 style={{textAlign: 'left'}} className="font-weight-semi-bold">Precio: ${formatNumber(producto.precio*descuento)}</h3>
                <h6 style={{textAlign: 'left'}} className="font-weight-semi-bold text-primary mb-4">Ahorras: ${formatNumber(producto.precio - producto.precio*descuento)} (20% OFF)</h6>
                <p style={{textAlign: 'justify'}} className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                {

                    
                    isInCart(producto.id) < 1 ?
                    
                    <ItemCount stock={producto.tallas["S"] + producto.tallas["M"] + producto.tallas["L"]} initial='1' onAdd={(c) => {
                        
                            const cantidadElementos = document.getElementById('cantidadElementos');
                            const cantidad = cantidadElementos.innerHTML
                            addItem(producto,cantidad)

                    }} />
                    : 
                    <div style={{display: 'flex'}} >

                        {
                            cantidadItems > 1 ? <p style={{color: 'green', textAlign: 'center', paddingRight: 4, marginTop: 'auto', marginBottom: 'auto'}} >Agregaste {cantidadItems} unidades  al carrito </p>:
                            <p style={{color: 'green', textAlign: 'center', paddingRight: 4, marginTop: 'auto', marginBottom: 'auto'}} >Agregaste una unidad al carrito </p>
                        }  
                        
                        <Link to={`/cart`}><button className="btn btn-primary px-3"><FontAwesomeIcon icon={faShoppingCart} /> Finalizar Compra</button></Link>
                    </div> 

                }
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Compartir:</p>
                    <div className="d-inline-flex">
                    <Link style={{padding: 3}} to='/'><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link style={{padding: 3}} to='/'><FontAwesomeIcon style={{padding: 3}} icon={faTwitter} /></Link>
                    <Link style={{padding: 3}} to='/'><FontAwesomeIcon style={{padding: 3}} icon={faLinkedin} /></Link>
                    <Link style={{padding: 3}} to='/'><FontAwesomeIcon style={{padding: 3}} icon={faInstagram} /></Link>
                    <Link style={{padding: 3}} to='/'><FontAwesomeIcon style={{padding: 3}} icon={faYoutube} /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail