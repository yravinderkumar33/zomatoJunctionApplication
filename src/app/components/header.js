import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <NavLink className="navbar-brand" to="/">ZOMATO JUNCTION</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">

          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <NavLink className="btn btn-primary" to="/about" role="button"> About us  </NavLink>


          <button className="btn btn-dark my-2 my-sm-0" type="submit" onClick={props.test}>View Categories</button>
        </div>
      </div>
    </nav>
  );
};



Header.propTypes = {
  test: PropTypes.func
}


