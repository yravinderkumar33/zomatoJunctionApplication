/*global XMLHttpRequest alert document localStorage:true*/
/*eslint no-undef: "error"*/

import React from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Collection } from './components/Collections';
import { ZomatoCategories } from './components/ZomatoCategories';
import { RestroCollection } from './components/RestroCollection';
import { Footer } from './components/footer'
import { SideBarCategory } from './components/SideBarCategory';
import { Pictures } from './components/Picture';


export class Container extends React.Component {

	constructor() {
		super();
		this.state = {
			key: "4e2c8614f7c9ac9aef8065be7873f37e",
			categories: [],
			currentCity: [],
			collection: [],
			cuisines: [],
			restro: [],
			showZomatoCategoies: false,
			showResult: false,
			// showCollectionButton: false,
			userDefinedCategories: [{ name: "pizza", value: [] }, { name: "burger", value: [] }, { name: "north", value: [] }]
		}
		this.getCuisines = this.getCuisines.bind(this);
		this.getcityDetails = this.getcityDetails.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.getCategories = this.getCategories.bind(this);
		this.addToExistingCat = this.addToExistingCat.bind(this);
		this.getCollections = this.getCollections.bind(this);
		this.getcityDetails = this.getcityDetails.bind(this);
	}


	// this function returns the list of all categories which are available for zomato
	getCategories() {

		let xmlHttp = new XMLHttpRequest();
		let c = null;
		xmlHttp.open("GET", "https://developers.zomato.com/api/v2.1/categories", true);
		xmlHttp.setRequestHeader("user-key", this.state.key);
		xmlHttp.setRequestHeader("Accept", "application/json");
		xmlHttp.onload = function () {
			if (xmlHttp.readyState === 4) {
				if (xmlHttp.status === 200) {
					let categories = JSON.parse(xmlHttp.response).categories;
					c = categories.map(function (element) {
						return element.categories.name;
					});
					console.log(c);
				} else {
					console.error("not ok");
				}
			}
		}

		xmlHttp.onloadend = () => {
			let newState = this.state.showZomatoCategoies
			this.setState({
				categories: c,
				showZomatoCategoies: !newState
			}
			)
		}
		xmlHttp.send();
	}

	// function ends here

	// function to get city collections 

	getCollections(select) {

		let xmlHttp = new XMLHttpRequest();
		let c = null;
		console.log(this)
		xmlHttp.open("GET", "https://developers.zomato.com/api/v2.1/collections?city_id=" + select, true);
		xmlHttp.setRequestHeader("user-key", this.state.key);
		xmlHttp.setRequestHeader("Accept", "application/json");
		xmlHttp.onload = function () {
			if (xmlHttp.readyState === 4) {
				if (xmlHttp.status === 200) {
					let categories = JSON.parse(xmlHttp.response).collections;
					c = categories.map(function (element) {
						let obj = {
							collection_id: element.collection.collection_id,
							title: element.collection.title, image_url: element.collection.image_url,
							description: element.collection.description
						}
						return obj;
					});
					console.log(c);
				} else {
					console.error("not ok");
				}
			}
		}

		xmlHttp.onloadend = () => {
			this.setState({
				collection: c
			}
			)

			console.log(this.state.collection);

			this.getResultByKeywords();
		}
		xmlHttp.send();
	}


	// function to get the city details 

	getcityDetails() {
		let xmlHttp = new XMLHttpRequest();
		let c = null;
		let val = document.getElementById("city").value;
		xmlHttp.open("GET", "https://developers.zomato.com/api/v2.1/cities?q=" + val, true);
		xmlHttp.setRequestHeader("user-key", this.state.key);
		xmlHttp.setRequestHeader("Accept", "application/json");
		xmlHttp.onload = function () {
			if (xmlHttp.readyState === 4) {
				if (xmlHttp.status === 200) {
					let location = JSON.parse(xmlHttp.response).location_suggestions;
					c = location.map(function (element) {
						var newObj = { id: element.id, city: element.name };
						return newObj;
					});
					console.log(c);
				} else {
					console.error("not ok");
				}
			}
		}
		xmlHttp.onloadend = () => {
			let newState = this.state.showResult
			this.setState({
				currentCity: c,
				showResult: !newState
			}
			)
			console.log(typeof select);
			console.log(this.state.currentCity[0].id);

			this.getCollections(this.state.currentCity[0].id);

		}
		xmlHttp.send();
	}

	// function ends here

	getCuisines() {
		let xmlHttp = new XMLHttpRequest();
		let c = null;
		// let val= this.state.currentCity[0].id;
		xmlHttp.open("GET", "https://developers.zomato.com/api/v2.1/cuisines?city_id=1", true);
		xmlHttp.setRequestHeader("user-key", this.state.key);
		xmlHttp.setRequestHeader("Accept", "application/json");
		xmlHttp.onload = function () {
			if (xmlHttp.readyState === 4) {
				if (xmlHttp.status === 200) {
					let location = JSON.parse(xmlHttp.response).cuisines;
					c = location.map(function (element) {
						return element.cuisine.cuisine_name;
					});
				} else {
					console.error("not ok");
				}
			}
		}

		xmlHttp.onloadend = () => {
			this.setState({
				cuisines: c
			}

			)
			alert(this.state.cuisines.join("\n"));
		}
		xmlHttp.send();
	}

	// function ends here

	// function to search by keyword starts here

	getResultByKeywords() {
		console.log("entered into get details by keyword function")
		let xmlHttp = new XMLHttpRequest();
		let c = null;
		xmlHttp.open("GET", "https://developers.zomato.com/api/v2.1/search?entity_id=" + this.state.currentCity[0].id + "&entity_type=city&q=" + document.getElementById("keyword").value, true);
		xmlHttp.setRequestHeader("user-key", this.state.key);
		xmlHttp.setRequestHeader("Accept", "application/json");
		xmlHttp.onload = function () {
			if (xmlHttp.readyState === 4) {
				if (xmlHttp.status === 200) {
					let location = JSON.parse(xmlHttp.response).restaurants;
					c = location.map(function (element) {
						var restro = {
							res_id: element.restaurant.R.res_id,
							id: element.restaurant.id,
							name: element.restaurant.name,
							address: element.restaurant.location,
							url: element.restaurant.url,
							thumb: element.restaurant.thumb
						}
						return restro;
					});
				} else {
					console.error(" request call not made ");
				}
			}
		}

		xmlHttp.onloadend = () => {
			this.setState({
				restro: c
			}
			);
		}
		xmlHttp.send();
	}

	// function ends here


	addCategory() {

		if (document.getElementById("cat").value) {
			let newObj = this.state.userDefinedCategories;
			newObj.push({ name: document.getElementById("cat").value, value: [] });
			this.setState({
				userDefinedCategories: newObj
			})
			localStorage.setItem("categories", JSON.stringify(this.state.userDefinedCategories));
		} else {
			alert("please enter a value first")
		}
	}

	// function ends here
	addToExistingCat(res, category) {
		console.log(res + "clicked on " + category);

		var n = Object.assign(this.state.userDefinedCategories);
		var a = n.findIndex(function (element) {
			return element.name === category;
		});

		n[a].value.push(res);

		this.setState({
			userDefinedCategories: n
		});

		localStorage.setItem("categories", JSON.stringify(this.state.userDefinedCategories));
		alert("successfully added to category " + category);

	}
	// render function starts here

	render() {

		let showCategories = null;
		let restroResults = <Pictures />;

		if (this.state.showZomatoCategoies) {
			showCategories = <ZomatoCategories cat={this.state.categories} />
		}

		if (this.state.showResult) {
			restroResults = <div><RestroCollection restro={this.state.restro} cat={JSON.parse(localStorage.getItem("categories"))} add={this.addToExistingCat} />
				<Collection collection={this.state.collection} />
			</div>
		}

		if (typeof (Storage) !== "undefined") {
			if (!localStorage.categories) {
				localStorage.setItem("categories", JSON.stringify(this.state.userDefinedCategories));
				console.log(localStorage.getItem("categories"));
			}
		} else {
			console.log(localStorage.getItem("categories"));
		}
		return (
			<div>
				<Header test={this.getCategories} />
				{showCategories}
				<div className="container">
					<div className="row">
						<div className="col-sm-2 sidebar align-self-top">
							<SideBarCategory test={JSON.parse(localStorage.getItem("categories"))} addCat={this.addCategory} />

						</div>
						<div className="col-sm-10 align-self-center">
							<Hero city={this.getcityDetails} cuisine={this.getCuisines} />
							{restroResults}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

