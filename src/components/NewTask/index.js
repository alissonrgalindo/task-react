import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.scss';

export default class newTask extends Component {
    render() {
        return(
          <Link to="/create" className='add'>New Task</Link>
        )
      }
}