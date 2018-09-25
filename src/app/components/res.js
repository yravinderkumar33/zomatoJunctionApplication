/*global fetch:true*/
/*eslint no-undef: "error"*/


import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from './header';
import { SideBarCategory } from './SideBarCategory';
import PropTypes from 'prop-types'

export class res extends React.Component {
  constructor(props) {
    super(props);
    this.callApi();
    this.state = {
      data: {},
    };
  }

  callApi() {
    fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.match.params.id}`, {
      headers: {
        'user-key': '4e2c8614f7c9ac9aef8065be7873f37e',
      },
    }).then(response => response.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
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
                <p className="lead">
                  <NavLink className="btn btn-primary btn-lg" to="/" role="button"> Home Page </NavLink>
                </p>
                <h1 className="display-6">{this.state.data.name}</h1>
                <div className="row">
                  <div className="col-sm-6">
                    <img src={this.state.data.thumb} alt="sorry not available" width="300" height="300" />
                  </div>
                  <div className="col-sm-6">
                    <p>
                          {' '}
                          <b>Cuisines </b>
                          {' '}
:
                          {' '}
                          {this.state.data.cuisines}
                        </p>
                    <p>
                          {' '}
                          <b>Restraunt Id </b>
                          {' '}
:
                          {' '}
                          {this.state.data.id}
                        </p>
                    <p>
                          {' '}
                          <b>average cost for two </b>
                          {' '}
:
                          {' '}
                          {this.state.data.average_cost_for_two}
                        </p>
                    <a href={this.state.data.url} className="btn btn-primary"> Go to website </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


res.propTypes = {
  match : PropTypes.object
}