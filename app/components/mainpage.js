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
import FlatButton from 'material-ui/FlatButton';

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      open:false,
      projects: []
    }
  }
  componentDidMount() {
    console.log('in mount', this.props.token);
    if (this.props.token) {
      axios.get('http://localhost:8080/getUserDatasets', {params: {accessToken: this.props.token}})
      .then((data) => {
        console.log('this is data in componentDidMount', data);
        this.setState({projects: data.data.records});

      })
    } else { console.log("Where's my token")}
  }
  render() {
    //functions
    console.log(this.props)
    console.log(this.props.token);

    var forceNavDown = {'top': '72px'};
    var positionTitle = {'top': '-8px', 'padding':'0px,0px,0px,0px', 'backgroundColor':grey700, 'height':'73px'};
  // var forceNavDown = {'top': '72px'};
  // var positionTitle = {'top': '-8px', 'left':'-10px','background-color':grey700, 'width':'123%', 'height':'73px'};
    return (
      <div>
        <div>
          <AppBar title="dataset.tools" showMenuIconButton={false}  style={positionTitle} iconElementRight={<Link to="/"><FlatButton label="Log Out" /></Link>} />
          <div className='mainContent'>
            <p>something here</p>
          </div>
        <Drawer className='nav' open={true} containerStyle={forceNavDown}>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Datasets</MenuItem>
          <MenuItem>Upload DataSet</MenuItem>
          <MenuItem>{this.props.token}</MenuItem>
          <MenuItem>{this.props.path}</MenuItem>
        </Drawer>
        </div>
      </div>
    );
  }
}
