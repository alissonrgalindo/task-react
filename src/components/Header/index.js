import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className='btn'><h1 className="header__title">Tasks</h1></Link>
      </div>
    );
  }
}
