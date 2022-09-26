import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom' 
import { AppContext } from '../app/CartContext' 

const NavBar = () => {
    const { items, addItem, removeItem, clear } = useContext(AppContext);
  return (
    <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-lg-block text-lg-left">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark"><Link to='/'>Home</Link></a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark"><Link to='/category/contactenos'>Contacto</Link></a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark px-2">
                        <Link to='/'><FontAwesomeIcon icon={faFacebook}/></Link>
                    </a>
                    <a className="text-dark px-2">
                        <Link to='/'><FontAwesomeIcon icon={faTwitter}/></Link>
                    </a>
                    <a className="text-dark px-2">
                        <Link to='/'><FontAwesomeIcon icon={faLinkedin}/></Link>  
                    </a>
                    <a className="text-dark px-2">
                        <Link to='/'><FontAwesomeIcon icon={faInstagram}/></Link> 
                    </a>
                    <a className="text-dark pl-2">
                        <Link to='/'><FontAwesomeIcon icon={faYoutube}/></Link>  
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center py-1 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a href="/" className="text-decoration-none">
                <Link style={{ textDecoration: 'none' }} to='/'><h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Trunk</span>OfSex</h1></Link>  
                </a>
            </div>
            <div className="col-lg-6 col-6 text-center">
                <p>Tus deseos son ordenes</p>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <a className="btn border">
                <CartWidget/> 
                </a>
                <a className="btn border" onClick={clear}>
                    <FontAwesomeIcon icon={faTrash}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NavBar;