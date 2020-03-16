import React, { Component } from "react";
import "./style.css"

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Employee Directory</h1>
                <h3>Search for employee by name or location, or use the search bar</h3>
            </div>
        );
    }
}