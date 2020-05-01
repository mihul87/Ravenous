import React, { Component } from "react";
import "./App.css";
import BusinessList from "../businessList/businessList";
import SearchBar from "../searchBar/searchBar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}
