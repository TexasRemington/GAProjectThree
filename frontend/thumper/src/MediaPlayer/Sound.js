import React, { Component } from "react";

class Sound extends Component {

  var Myplayer = require('react');
  var Sound = require('react-sound');

  var MyComponentWithSound = React.createClass({
    render() {
      return Sound {...props};
    }
  });

export default Sound;
