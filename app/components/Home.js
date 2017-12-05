// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import axios from 'axios';
import { Input } from 'semantic-ui-react';
require('dotenv').config();
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
          <input placeholder="Username"></input>
          <br/>
          {/* <ButtonExampleColored/> */}
          <input placeholder="Password"></input>
          <br/>
          <button> Sign up</button>
          <button>Login</button>
          <button onClick={clicked}>Click Me</button>
          <script>//<Link to="/counter">to Counter</Link></script>
          <a  href="https://data.world/oauth/authorize?client_id="${process.env.client_ID}"&redirect_uri=http://localhost:8080&response_type=code">Click here to sign in with data.world!!</a>
        </div>
      </div>
    );
  }
}
