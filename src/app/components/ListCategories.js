import React from 'react';
import { Header } from './header'
import { NavLink } from 'react-router-dom'
import { SideBarCategory } from './SideBarCategory'
import PropTypes from 'prop-types';

export const ListCategories = (props) => {

    let list = false;
    if (props.match.params.value !== undefined) {

        let valueArray = props.match.params.value.split(",");
        list = valueArray.map(function (element, index) {
            return <tr className="table-active" key={index}>
                <th> <NavLink to={"/test/" + element.trim()}> <button type="button" className="btn btn-primary">{"View Restraunt"} </button>  </NavLink>  </th>
                <td>{element}</td>

            </tr>
        })
    } else {
        list = <tr className="table-active">
            <th scope="row">no result</th>
            <td>no result</td>

        </tr>
    }

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
                            <h1 className="display-5"> Displaying Results for {props.match.params.name} </h1>



                            <table className="table table-hover">

                                <tbody>
                                    <tr className="table-active">
                                    <td>Website</td>
                                        <th scope="row">Restraunt Id</th>
                                        

                                    </tr>
                                    {list}
                                </tbody>
                            </table>







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

ListCategories.propTypes = {
        match  : PropTypes.object,

}