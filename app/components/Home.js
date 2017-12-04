// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import axios from 'axios';

export default class Home extends Component {
  render() {

    var clicked = function(){
      console.log('clicked');
    }
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>dataset.tools</h2>
          <input placeholder="Username"></input>
          <br/>
          <input placeholder="Password"></input>
          <br/>
          <button> Sign up</button>
          <button>Login</button>
          <button onClick={clicked}>Click Me</button>
          <script>//<Link to="/counter">to Counter</Link></script>
        </div>
      </div>
    );
  }
}
