import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className="container-fluid pt-3">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Contactanos</span></h2>
        </div>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Nombre"
                                required="required" data-validation-required-message="Ingesa tu Nombe" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Email"
                                required="required" data-validation-required-message="Ingresa tu email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="subject" placeholder="Motivo"
                                required="required" data-validation-required-message="Ingesa un Motivo" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="6" id="message" placeholder="Mensaje"
                                required="required"
                                data-validation-required-message="Ingresa tu inquietud"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Enviar Mensaje </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <h5 className="font-weight-semi-bold mb-3" style={{textAlign: 'left'}}>Tu Opinión Importa</h5>
                <p style={{textAlign: 'left'}}>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                <div className="d-flex flex-column mb-3">
                    <h5 style={{textAlign: 'left'}} className="font-weight-semi-bold mb-3">Datos Adicionales</h5>
                    <p style={{textAlign: 'left'}} className="mb-2"><FontAwesomeIcon icon={faMapMarker}/> Avenida Callao, Buenos Aires, Argentina</p>
                    <p style={{textAlign: 'left'}} className="mb-2"><FontAwesomeIcon icon={faEnvelope}/> info@trunkofsex.com</p>
                    <p style={{textAlign: 'left'}} className="mb-2"><FontAwesomeIcon icon={faPhone}/> +54 11 1234 5678</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact