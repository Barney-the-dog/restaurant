import React from 'react';
import { globalContext } from '../../contexts/globalContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


function Add() {

    const { dispatch } = useContext(globalContext)
    const [text, setText] = useState('')
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [address, setAddress] = useState('');
  
    function handleSubmit(event){
      event.preventDefault()
      
      if (/\S+\s*/.test(text) && /\S+\s*/.test(description)){  
      dispatch({
        type: 'ADD_REST',
        payload: {
          text,
          image,
          description,
          address,
          id: Date.now(),
        }
      });
    
    setText('')
    setImage('')
    setDescription('')
    setAddress('')
  } else {
    alert('Нельзя оставлять пустые поля');
  }
}
  
      return (
        <>
        <form className='mb-3' onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Имя ресторана
          </label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="ction"
              placeholder="введите название"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />
          </div>
          <label className="col-sm-2 col-form-label">
            Фото
          </label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="action"
              placeholder="введите адрес картинки"
              onChange={(event) => setImage(event.target.value)}
              value={image}
            />
          </div>
          <label className="col-sm-2 col-form-label">
            Описание
          </label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="action"
              placeholder="введите описание"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </div>
          <label className="col-sm-2 col-form-label">
            Адрес ресторана
          </label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="ction"
              placeholder="введите адрес"
              onChange={(event) => setAddress(event.target.value)}
              value={address}
            />
            </div>
                      <div className="col-sm-10">
             <button type="submit" className="btn btn-primary">
                Добавить
             </button>
            </div>
            
            <Link to={`/cardList`}>
             <button type="button" class="btn btn-secondary">Список ресторанов</button>
            </Link>
        </div>
      </form>
        </>
      );
  }
    
export default Add;