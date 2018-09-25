import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const SideBarCategory = (props) => {

  let a = null;
  if (props.test) {
    a = <ul className="list-group">
      {props.test.map(function (element, index) {
        return <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <NavLink to={"/categories/" + element.name + "/" + element.value}>{element.name} </NavLink>
          <span className="badge badge-primary badge-pill">{element.value.length}</span>
        </li>
      })}

    </ul>
  }


  return (

    <div>

      <div className="sidebar_pic"> </div>

      <div className="form-group">
        <fieldset disabled="">

          <input className="form-control" id="cat" placeholder="Write Category" type="text" />
        </fieldset>
      </div>
      <button type="submit" className="btn btn-danger" onClick={props.addCat}>Add Category</button>
      <br />
      <br />

      {a}

      <br />
      <br />



    </div>
  );

}



SideBarCategory.propTypes = {
  addCat: PropTypes.func,
  test: PropTypes.array
}
