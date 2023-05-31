import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { globalContext } from '../../contexts/globalContext';
import "../../styles/Main.css"

function Card({id, text, image, description, location}) {

    const {dispatch} = useContext(globalContext)

    function deleteCard(id){
        dispatch({
            type: 'DELETE_REST',
            payload: id,
        })
    }

    return (
     <>
      <div className="card">
       <div className="card-body">
       <h5 className="card-title">{text}</h5>
       <img src={image} alt='card_picture' className='picture'/>
       <p className="card-text">{description}</p>
       <p className='subtitle'>{location}</p>
       </div>
       <Link to={`/edit/${id}`}>
       <button 
       type="button" 
       className="btn btn-success">
        Изменить
        </button>
       </Link>
       <Link>
       <button 
       type="button" 
       className="btn btn-info"
       onClick = { () => deleteCard(id)}
       >
        Удалить
        </button>
       </Link>
      </div>
     </>
    );
}

export default Card;