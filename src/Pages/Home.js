import React, { Component } from 'react';

import Header from "../components/Header"
import NewTask from "../components/NewTask"
import List from "../components/List"

export default class Home extends Component {
    render() {
        return(
          <div className='container'>

            <Header/>
            <NewTask/>
            <List/>
          </div>
        )
      }
}