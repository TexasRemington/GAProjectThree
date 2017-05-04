import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
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
    // console.log('inside handleform in login with username ', this.state.username, ' password ', this.state.password);
    if (this.state.type === 'login'){
      this.props.handleLogIn(this.state.username, this.state.password);
    } else if (this.state.type === 'signup'){
      this.props.handleSignUp(this.state.username, this.state.password);
    }
  }


  render() {


    const XLoginRedirectx = () => {
      // console.log('inside login redirect const');
      // console.log('this state redirect', this.props.redirect);
      if(this.props.redirect === "/StationsPage"){
        // this.setState({
        //   redirect: ''
        // });
        return(
          // <Route path="/StationsPage" component={xStationsPagex}/>

          // <Redirect to="/StationsPage" push />
          <div></div>
        )
      }else if (this.props.redirect === 'loginfailed') {
        // this.setState({
        //   redirect: ''
        // });
        return(
          <div><p>Your login password or username is incorrect!</p></div>
        )
      }else if (this.props.redirect === 'signupfailed'){
        // this.setState({
        //   redirect: ''
        // });
        return(
          <div><p>Your signup username is already taken!</p></div>
        )
      }else{
        return(
          <div></div>
        )
      }
      return(<div></div>)
    }


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
            <select onChange={(e)=>this.setState({type: e.target.value})}>
              <option value="login">Login</option>
              <option value="signup">Signup</option>
            <br />
            </select>
            <h5><strong>Email:</strong></h5>
            <input type="text" name="name" onChange={(e)=>this.setState({username: e.target.value})}/>
            <h5><strong>Password:</strong></h5>
            <input type="text" name="password" onChange={(e)=>this.setState({password: e.target.value})}/>


            <br />
            <br />
            <input type="submit" value="Submit" onClick={(e)=>this.handleForm(e)}/>
            </label>
          </form>




      <XLoginRedirectx/>

      </div>
    );
  }
}

export default Login;
