import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div className="card col-sm-3 border-primary ">
            <img className="card-img-top" src={props.card.image_url} alt="Card  cap" />
            <div className="card-body">
                <h5 className="card-title"> {props.card.title}</h5>
                <p className="card-text  text-danger"> {props.card.description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    card: PropTypes.object
}


