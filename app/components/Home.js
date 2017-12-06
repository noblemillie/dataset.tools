// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import axios from 'axios';
// import { Input } from 'semantic-ui-react';

// import 'semantic-ui-css/semantic.min.css';
// import ButtonExampleColored from "./button.js"


export default class Home extends Component {
  render() {

    var clicked = function(){
      console.log('clicked');
    }

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>dataset.tools</h2>
          <br/>
          <br/>
          <script>//<Link to="/counter">to Counter</Link></script>
          <a  href="http://localhost:8080/authorize">Click here to sign in with data.world!!</a>
        </div>
      </div>
    );
  }
}
