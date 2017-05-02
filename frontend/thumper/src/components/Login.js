import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="row">
          <div className="starter-template">
            <h1>Thumper Music App | Live Streaming with Friends</h1>
            <br />
            <br />
            <p className="lead">Host your music in real time. Have everyone at your scene sync up!</p>
          </div>
          <br />

          <h2>Sign Up / Login</h2>



          <form>
            <label>
            <h5><strong>Email:</strong></h5>
            <input type="text" name="name" />
            <h5><strong>Password:</strong></h5>
            <input type="text" name="password" />
            <br />
            <br />
            <input type="submit" value="Submit" />
            </label>
          </form>

      </div>
    );
  }
}

export default Login;
