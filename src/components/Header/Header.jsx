import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" >HOT DOG</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className= "nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className= "nav-link" to='/cardList'>Dog restaurants</Link>
        </li>
        <li className="nav-item">
          <Link className= "nav-link" to='/add'>Add restaurant</Link>
        </li>
       </ul>
    </div>
  </div>
</nav>    
      </div>
    );
}

export default Header;