import React from 'react';
import { Card } from './Card';
import PropTypes from 'prop-types'

export const Collection = (props) => {


    return (
        <section>
            <div className="container">
                <div className="row">   
                    <div className="alert col-sm-12" role="alert">
                        <h4> Collections : </h4>  Explore curated lists of top restaurants, cafes, pubs, and bars, based on trends
                    </div>
                  {props.collection.map(function(element,index){
                      return <Card key={index} className="col-sm-4" card={element}/>
                  })}
                </div>
            </div>
        </section>
    );
}

Collection.propTypes = {
    collection : PropTypes.array
}