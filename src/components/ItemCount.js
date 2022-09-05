import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ( { stock, initial } ) => {
    const [contador, setContador] = useState(initial)
  return (
    <div>
        
        <div className='card-footer d-flex justify-content-between bg-light border'>
            <a style={{marginTop: 20, marginBottom: 20}} id="" className='verDetalle btn btn-sm text-dark p-0'><div style={{paddingRight: 5}}><FontAwesomeIcon icon={faEye}/></div>Ver Detalle</a>
                
            <div className='input-group' style={{width:150, marginTop: 20, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
                <span className='input-group-btn'>
                    <button className='btn btn-default btn-number' onClick={() => 
                        {
                            contador === 0? setContador(0):setContador(contador-1)
                        }
                    }><FontAwesomeIcon icon={faMinus}/></button>
                </span>
                <p className='form-control input-number'>{contador}</p>
                <span className='input-group-btn'>
                    <button type='button' className='btn btn-default btn-number' onClick={() => 
                        {
                            if (contador === parseInt(stock)){
                                setContador(parseInt(stock))
                            }else{
                                setContador(parseInt(contador)+1)
                            }
                        }
                    }><FontAwesomeIcon icon={faPlus}/></button>
                </span>
            </div>

            <a style={{marginTop: 20, marginBottom: 20}} id="" className='carrito btn btn-sm text-dark p-0'><div style={{paddingRight: 5}} ><FontAwesomeIcon icon={faShoppingCart}/></div>Añadir al Carrito</a>
        </div>

    </div>

  )
}

export default ItemCount;