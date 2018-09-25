import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Modal = props => (
  <div className="modal fade" id={props.card.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header  bg-danger text-white">
          <h5 className="modal-title" id="exampleModalLabel">{props.card.name}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">

          <div className="container">
            <div className="row">

              <div className="col-sm-12">
                <div className="card">
                  <img className="card-img-top img-fluid" src={props.card.thumb} alt="sorry not available" />
                  <div className="card-body">
                          <h5 className="card-title  text-danger">{props.card.name}</h5>
                          <p className="card-text">
                                            Address :-
                              {props.card.address.address}
                              {' '}
                              <br />
                                            City :-
                              {props.card.address.city}
                            </p>
                          <div className="dropdown d-flex justify-content-around">

                              <a href={props.card.url} className="btn btn-primary">Website</a>
                              <NavLink to={`/test/${props.card.id}`} target="_blank" className="btn btn-primary">View Restraunt</NavLink>
                              <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Add To Category
                                </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                  {props.cat.map((element, index) => <button type="button" key={index} onClick={() => { props.add(props.card.id, element.name); }} className="dropdown-item" href="#">{element.name}</button>)}
                                </div>
                            </div>
                        </div>
                </div>
              </div>


            </div>
          </div>


        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
);


Modal.propTypes = {
  card: PropTypes.object,
  add : PropTypes.func,
  cat : PropTypes.array
}
