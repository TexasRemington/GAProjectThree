import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      type: 'login'
    };
  }


  handleForm(e){
    e.preventDefault();
    console.log('inside handleform in login with username ', this.state.username, ' password ', this.state.password);
    if (this.state.type === 'login'){
      this.props.handleLogIn(this.state.username, this.state.password);
    } else if (this.state.type === 'signup'){
      this.props.handleSignUp(this.state.username, this.state.password);
    }
  }


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
            <input type="text" name="name" onChange={(e)=>this.setState({username: e.target.value})}/>
            <h5><strong>Password:</strong></h5>
            <input type="text" name="password" onChange={(e)=>this.setState({password: e.target.value})}/>
            <select onChange={(e)=>this.setState({type: e.target.value})}>
              <option value="login">Login</option>
              <option value="signup">Signup</option>
            </select>
            <br />
            <br />
            <input type="submit" value="Submit" onClick={(e)=>this.handleForm(e)}/>
            </label>
          </form>

      </div>
    );
  }
}

export default Login;
