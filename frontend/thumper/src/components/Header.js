import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-md-4">

          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Thumper</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Login</a></li>
                  <li><a href="#home">About</a></li>
                  <li><a href="#about">Profile</a></li>
                  <li><a href="#playlists">PlayList</a></li>
                </ul>
              </div>
            </div>
          </nav>

          </div>
        </div>
      </header>
    );
  }
}

export default Header;
