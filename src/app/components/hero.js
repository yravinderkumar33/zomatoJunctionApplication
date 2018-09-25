import React from 'react';
import PropTypes from 'prop-types';

export const Hero = (props) => {
        return (
            <div className="jumbotron">
                <h3>Find the best restaurants, cafés, and bars</h3>
                <p className="lead">Search for your favorite place on the Zomato Junction<br /></p>
                <hr className="my-4" />

                <div className="container">
                    <div className="row">
                        <div className="form-row col-md-12">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="City Name" id="city" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Search Keywords" id="keyword"/>
                            </div>
                            <div className="col">
                                <input type="submit" className="btn btn-danger form-control" value="Show Restaurants" onClick={props.city} />
                            </div>
                            <div className="col">
                                <input type="submit" className="btn btn-danger form-control" value="Show Cuisines" onClick={props.cuisine}/>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <p id="hey"> </p>

            </div>
        );   
}



Hero.propTypes={
    city:PropTypes.func,
    cuisine : PropTypes.func
}