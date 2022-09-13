import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ( { stock, initial } ) => {
    const [contador, setContador] = useState(initial)
  return (
    <div>
        
        <div className=' d-flex justify-content-between bg-light'>
            
                
            <div className='input-group' style={{width:150, marginTop: 20, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
                <span className='input-group-btn'>
                    <button className='btn btn-primary btn-plus' onClick={() => 
                        {
                            contador === 0? setContador(0):setContador(contador-1)
                        }
                    }><FontAwesomeIcon icon={faMinus}/></button>
                </span>
                <p className='form-control input-number'>{contador}</p>
                <span className='input-group-btn'>
                    <button type='button' className='btn btn-primary btn-plus' onClick={() => 
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

            
        </div>

    </div>

  )
}

export default ItemCount;