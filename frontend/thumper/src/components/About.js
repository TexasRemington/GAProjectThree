import React, { Component } from 'react';
import './About.css';


class About extends Component {
  render() {
    return (
      <div className="about">

          <h1>Sync up your entire scene</h1>
          <p>We were inspired by a beach party that had</p>
          <p>entirely too many songs all playing at once.</p>
          <p>How awesome would it be to get every device </p>
          <p>and bluetooth speaker, within your party</p>
          <p>synchronize to a single playlist? </p>
          <h1> Now its entirely possible.. </h1>
          <br />
          <br />

          <div className="sool">
          <ul>
            <h1><strong>Partners</strong></h1>
            <li>Remmington</li>
            <li>Jorge</li>
            <li>Chris</li>
            <li>Platipus</li>
          </ul>
        </div>
      </div>

    );
  }
}

export default About;
