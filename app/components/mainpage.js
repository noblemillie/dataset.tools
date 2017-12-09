// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500, grey700
} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Flexbox from 'flexbox-react';
import styled from 'styled-components';

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
  }
  render() {
    //functions
    console.log(this.props)
    console.log(this.props.addToken.token);

  var forceNavDown = {'top': '72px'};
  var positionTitle = {'top': '-8px', 'left':'-10px','background-color':grey700, 'width':'123%', 'height':'73px'};
    return (
      <div>
        <Flexbox >
        <AppBar title="dataset.tools" showMenuIconButton={false} iconClassNameRight="muidocs-icon-navigation-expand-more" style={positionTitle} />
        </Flexbox>
        <Flexbox>
          <Link to="/">To HomePage</Link>
          <p>something here</p>
          </Flexbox>
      <Flexbox >
      <Drawer open={true} containerStyle={forceNavDown}>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Datasets</MenuItem>
        <MenuItem>Upload DataSet</MenuItem>
        <MenuItem>{this.props.addToken.token}</MenuItem>
        <MenuItem>{this.props.path}</MenuItem>
      </Drawer>
      </Flexbox>
      </div>
    );
  }
}
