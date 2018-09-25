import React from 'react';
import { Modal } from './modal'
import PropTypes from 'prop-types';

export const RestroCard = (props) => {
    return (
        <div className="col-sm-3">
        <div className="card">
            <img className="card-img-top" src={props.card.thumb} alt="Sorry not available" />
            <div className="card-body">
                <h5 className="card-title   text-danger"> {props.card.name}</h5>
                <p className="card-text">  <b> <u>{props.card.address.city} </u></b></p>

                <button type="button" className="btn btn-danger align-self-end" data-toggle="modal" data-target={"#" + props.card.id}>
                    View Details
                </button>
                <Modal card={props.card} cat={props.cat} add={props.add} />
            </div>
        </div>
        </div>
    );
}

RestroCard.propTypes = {
    card: PropTypes.object,
    add : PropTypes.func,
    cat : PropTypes.array
}






