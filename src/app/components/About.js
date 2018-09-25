import React from 'react';
import { Header } from './header'
import { NavLink } from 'react-router-dom'
import { SideBarCategory } from './SideBarCategory'
export const About = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 sidebar align-self-top">
                        <SideBarCategory />
                    </div>
                    <div className="col-sm-10 align-self-center">

                        <div className="jumbotron">
                            <h1 className="display-3">About us!</h1>
                            <p className="lead"> From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal..</p>
                            <hr className="my-4" />
                            <p>Find the best restaurants, cafés and bars in India</p>
                            <p className="lead">
                                <NavLink className="btn btn-primary btn-lg" to="/" role="button"> Home Page </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

