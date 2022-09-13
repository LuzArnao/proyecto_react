import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ItemCount from './ItemCount'

const ItemDetail = ( { id, imagen, nombre, precio, precioDescuento, stockTotal } ) => {
    
    function formatNumber(valor) {
        return valor.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }

  return (

    <div id={id} style={{padding: 3}} >
         
        <div className="row" style={{width: '95%', margin: 'auto' }} >
            <div className="col-lg-5 pb-5">
                <div className='card product-item border-0 mb-4'>
                    <div className='card-header product-img position-relative overflow-hidden bg-transparent border p-0'>
                        <img className='img-fluid' src={imagen} alt='imagenProducto'></img>
                    </div>
                </div>  
            </div>

            <div className="col-lg-7 pb-5">
                <h3 style={{textAlign: 'left'}} className="font-weight-semi-bold">{nombre}</h3>
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
                <h5 style={{textAlign: 'left'}}><del>Precio Total: ${formatNumber(precioDescuento)}</del></h5>
                <h3 style={{textAlign: 'left'}} className="font-weight-semi-bold">Precio: ${formatNumber(precio)}</h3>
                <h6 style={{textAlign: 'left'}} className="font-weight-semi-bold text-primary mb-4">Ahorras: ${formatNumber(precio - precioDescuento)} (20% OFF)</h6>
                <p style={{textAlign: 'justify'}} className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                <div className="d-flex mb-3">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Tallas:</p>
                    <form>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="size-2" name="size"></input>
                            <label className="custom-control-label" htmlFor="size-2">S</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="size-3" name="size"></input>
                            <label className="custom-control-label" htmlFor="size-3">M</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="size-4" name="size"></input>
                            <label className="custom-control-label" htmlFor="size-4">L</label>
                        </div>
                    </form>
                </div>
                <div className="d-flex mb-1">
                    <p className="text-dark font-weight-medium mb-0 mr-3">Colores:</p>
                    <form>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-1" name="color"></input>
                            <label className="custom-control-label" htmlFor="color-1">Negro</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-2" name="color"></input>
                            <label className="custom-control-label" htmlFor="color-2">Blanco</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-3" name="color"></input>
                            <label className="custom-control-label" htmlFor="color-3">Rojo</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-4" name="color"></input>
                            <label className="custom-control-label" htmlFor="color-4">Azul</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="color-5" name="color"></input>
                            <label className="custom-control-label" htmlFor="color-5">Verde</label>
                        </div>
                    </form>
                </div>
                <div className="d-flex align-items-center">
                    <div className="input-group quantity mr-3" style={{width: 180, marginRight: 10}}>
                        <ItemCount stock={stockTotal} initial='1'/>
                    </div>
                    <button className="btn btn-primary px-3"><FontAwesomeIcon icon={faShoppingCart} /> Agregar al Carrito</button>
                </div>
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Compartir:</p>
                    <div className="d-inline-flex">
                        <a className="text-dark px-2" href="">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="text-dark px-2" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="text-dark px-2" href="">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="text-dark px-2" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="text-dark px-2" href="">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail