import React from 'react';
import { RestroCard } from './restroCard';
import PropTypes from 'prop-types'

export const RestroCollection = (props) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="alert col-sm-12" role="alert">
                        <h4> Restraurants List : </h4>
                        Get a list of all the Restraurants in your city
                    </div>{props.restro.map(function (element, index) {
                        return <RestroCard key={index} 
                        card={element} cat={props.cat} 
                        add={props.add} />
                    })}
                </div>
            </div>
        </section>
    );
}


RestroCollection.propTypes = {
    add: PropTypes.func,
    cat: PropTypes.array,
    restro: PropTypes.array
}
