import React from 'react';
import Card from '../Card/Card';
import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';
import {Link} from 'react-router-dom';

function Cardlist() {
    
    const { state } = useContext(globalContext);

    return (
        <div className="row my-5 container">
        {state.list.map((post) => (
            <div key={post.id} className="col-3">
                <Card id={post.id} text={post.text} image={post.image} description={post.description} />
            </div>
            ))}
        </div>
    );
}

export default Cardlist;