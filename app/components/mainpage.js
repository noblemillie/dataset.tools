// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MainPage extends Component {
  render() {

    //functions

    return (
      <div>
          <h2>dataset.tools</h2>
          <br/>
          <Link to="/">To HomePage</Link>
          <p>something here</p>
      </div>
    );
  }
}
