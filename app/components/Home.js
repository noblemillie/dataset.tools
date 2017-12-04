// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <input></input><button> Login</button>
          <br/>
          <input></input><button> Sign up</button>
        <script>// <Link to="/counter">to Counter</Link></script>
        </div>
      </div>
    );
  }
}
