import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block text-lg-left">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark" href="">FAQs</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="">Ayuda</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="">Soporte</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark px-2" href="">
                        <FontAwesomeIcon icon={faFacebook}/>  
                    </a>
                    <a className="text-dark px-2" href="">
                        <FontAwesomeIcon icon={faTwitter}/>  
                    </a>
                    <a className="text-dark px-2" href="">
                        <FontAwesomeIcon icon={faLinkedin}/>  
                    </a>
                    <a className="text-dark px-2" href="">
                        <FontAwesomeIcon icon={faInstagram}/>  
                    </a>
                    <a className="text-dark pl-2" href="">
                        <FontAwesomeIcon icon={faYoutube}/>  
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a href="" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Trunk</span>OfSex</h1>
                </a>
            </div>
            <div className="col-lg-6 col-6 text-center">
                <p>Tus deseos son ordenes</p>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <a className="btn border">
                <CartWidget/> 
                </a>
                <a className="btn border">
                    <FontAwesomeIcon icon={faTrash}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NavBar;