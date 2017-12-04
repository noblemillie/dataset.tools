// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
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
          {/* <Link to="/counter">to Counter</Link> */}
        </div>
      </div>
    );
  }
}
