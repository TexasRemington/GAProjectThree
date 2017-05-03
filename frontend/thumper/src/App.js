import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import AddStations from './components/AddStations';
import Stations from './components/Stations';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import UnauthorizedStations from './components/UnauthorizedStations';
import IpApi from './components/IpApi';

// /* React Router Code --> */
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
//
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import Footer from './components/Footer';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      stations: [],
      username: '',
      password: '',
      authorized: false,
      redirect: '',
      ipaddress:'',
      lat: '',
      lon: '',
      owner:'',
      stationname: '',
      station_id: ''
    }
    this.redirect = '';
  }



  // Peters Function Code for Authorization?
 //  constructor(){
 //   super();
 //   this.state = {
 //     stations: [],
 //     username: '',
 //     password: ''
 //   }
 // }
 //


handleAddStation(owner,stationname){
  console.log('inside handle add station');
  console.log('value of owner', owner);
  console.log('value of stationname', stationname);
  const self = this;
  self.setState({
    owner: owner,
    stationname: stationname
  });//, ()=>{

      console.log('stationname after setting self ', stationname);


        axios.get('http://ip-api.com/json')
        .then((response) => {

          self.setState({
            ipaddress:response.data.query,
            lat: response.data.lat,
            lon: response.data.lon,
            station_id: Date.now()
          })


          axios.post('http://localhost:5000/stations/addstation', {
            stationname: stationname,
            owner:self.state.owner,
            password: self.state.password,
            station_id: self.state.station_id,
            lat: self.state.lat,
            lon: self.state.lon
          })
          .then((response)=>{

            axios.get('http://localhost:5000/stations')
            .then((response)=>{
              self.setState({
                stations: response
              });

            })
          })
          .catch(function (error) {
            console.error("error in handleAddStation", error);
          });

        })
        .catch(function (error) {
          console.error("error in handleAddStation", error);
        });

  //});
}




 handleLogIn(username, password){
 {/*call to the backend and bcrypt goes here*/}
   var self = this;
  //  console.log('inside login in App. username: ', username, ' password: ', password);
   this.setState({
     username:username,
     password:password
   },  ()=> {

       axios.post('http://localhost:5000/profiles/login', {
         username: self.state.username,
         password: self.state.password
       })
       .then(function (response) {
         console.log("response from axios App.js", response);
         {/*need to redirect the page here*/}
         if (response.data==='passwordsmatch'){
           self.setState({
             authorized: true,
             redirect: "/StationsPage"
           });
           self.redirect = "/StationsPage";
          //  this.context.router.transitionTo('/StationsPage');
         }

         if (response.data==='passwordsdontmatch'){
           self.setState({
             authorized: false,
             redirect:'loginfailed'
           });
           self.redirect = "loginfailed";
         }

         {/*response options are passwordsmatch or passwordsdontmatch*/}
       })
       .catch(function (error) {
         console.error("error from axios App.js", error);
       });
   });
 }

 handleSignUp(username, password){
 {/*call to the backend and bcrypt goes here*/}
  //  console.log('inside signup in App. username: ', username, ' password: ', password);
   var self = this;
   this.setState({
     username:username,
     password:password
   },  ()=>{

       axios.post('http://localhost:5000/profiles/signup', {
         username: self.state.username,
         password: self.state.password
       })
       .then(function (response) {
         console.log("response from axios App.js", response);
         {/*need to redirect the page here*/}
         {/*response options are profileposted or 500error*/}

         if (response.data==='profileposted'){
           self.setState({
             authorized: true,
             redirect:'/StationsPage'
           });
           self.redirect = "/StationsPage";
          //  this.context.router.transitionTo('/StationsPage');

         }

         if (response.data==='500error'){
           self.setState({
             authorized: false,
             redirect:'signupfailed'
           });
           self.redirect = "signupfailed";
         }

       })
       .catch(function (error) {
         console.error("error from axios App.js", error);
       });
   });
 }


  clearRedirect(){
      this.setState({
        redirect: '.'
      });
      // console.log('inside clearRedirect');
      // console.log('value of redirect is now, ', this.state.redirect);
  }

  handleLogIn(username, password){
  {/*call to the backend and bcrypt goes here*/}
    console.log('inside App. username: ', username, ' password: ', password);
    this.setState({
      username:username,
      password:password
    },  function() {
        let newusername = this.state.username;
        console.log(newusername);

        axios.post('http://localhost:5000/profiles/login', {
          username: this.state.username,
          password: this.state.password
        })
        .then(function (response) {
          console.log("response from axios App.js", response);
          {/*need to redirect the page here*/}
          {/*response options are passwordsmatch or passwordsdontmatch*/}
        })
        .catch(function (error) {
          console.error("error from axios App.js", error);
        });
    });
  }

  handleSignUp(username, password){
  {/*call to the backend and bcrypt goes here*/}
    console.log('inside App. username: ', username, ' password: ', password);
    this.setState({
      username:username,
      password:password
    },  function() {
        let newusername = this.state.username;
        console.log(newusername);

        axios.post('http://localhost:5000/profiles/signup', {
          username: this.state.username,
          password: this.state.password
        })
        .then(function (response) {
          console.log("response from axios App.js", response);
          {/*need to redirect the page here*/}
          {/*response options are status reject or status 200 ok*/}
        })
        .catch(function (error) {
          console.error("error from axios App.js", error);
        });
    });
  }

  componentWillMount(){
    var self = this;
    axios.get('http://localhost:5000/stations')
    .then((response)=>{
      self.setState({
        stations: response
      })
    })
  }



  render() {

    const XLoginRedirectx = () => {
      // console.log('inside login redirect const');
      // console.log('this state redirect', this.state.redirect);
      if(this.state.redirect === "/StationsPage"){
        // this.setState({
        //   redirect: ''
        // });
        return(
          // <Route path="/StationsPage" component={xStationsPagex}/>
          <Redirect to="/StationsPage" push />
        )
      }
      return(<div></div>)
    }

    // const XLoginRedirectx = () => {
    //   return(
    //     <Redirect to='/StationsPage'/>
    //   )
    // }







    // const xLoginRedirectx = () => (
    //   <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Navigate elsewhere" />} />
    // )

    const xStationsPagex = () => {
      if (this.state.authorized === true){
        return(
          <div>
           <AddStations handleAddStation={this.handleAddStation.bind(this)} />
           <Stations stations={this.state.stations}/>
           <IpApi stations={this.state.stations}/>
           <Footer />
          </div>
        )
      } else{
        return(
          <div>
            <UnauthorizedStations />
            <Footer />
          </div>
        )
      }
    }

    const xAboutPagex =  ()=> {
      return(
        <div>
          <About/>
          <Footer />
        </div>
      )
    }

    const xLoginPagex =  ()=> {
      return(
        <div>
          <Login  handleLogIn ={this.handleLogIn.bind(this)}
                  handleSignUp={this.handleSignUp.bind(this)}
                  redirect={this.state.redirect}
                />
          <Footer />
        </div>
      )
    }



    return (
      <div className="App">

      <Router>

      <div>

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
                  <li><Link to="/AboutPage">About</Link></li>
                  <li><Link to="/LoginPage">Login</Link></li>
                  <li><Link to="/StationsPage">Stations</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          </div>
        </div>
      </header>

      <Route exact path="/" component={xAboutPagex}/>
      <Route path="/AboutPage" component={xAboutPagex}/>
      <Route path="/LoginPage" component={xLoginPagex}/>
      <Route path="/StationsPage" component={xStationsPagex}/>

      <XLoginRedirectx />

      </div>



      </Router>

      </div>
    );
  }




  // <div>
  // <header>
  //   <div className="row">
  //     <div className="col-md-4">
  //
  //     <nav className="navbar navbar-inverse navbar-fixed-top">
  //       <div className="container">
  //         <div className="navbar-header">
  //           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
  //             <span className="sr-only">Toggle navigation</span>
  //             <span className="icon-bar"></span>
  //             <span className="icon-bar"></span>
  //             <span className="icon-bar"></span>
  //           </button>
  //           <a className="navbar-brand" href="#">Thumper</a>
  //         </div>
  //         <div id="navbar" className="collapse navbar-collapse">
  //           <ul className="nav navbar-nav">
  //             <li className="active"><a href="#">Login</a></li>
  //             <li><a href="#home">About</a></li>
  //             <li><a href="#about">Profile</a></li>
  //             <li><a href="#playlists">PlayList</a></li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //
  //     </div>
  //   </div>
  // </header>
  // </div>



  //
  // <Login />
  //
  // <Header />
  //
  // <h1>Thumper | Sync Your Squad</h1>
  // <AddStations />
  //
  // <br />
  //
  // <h3>Latest Stations</h3>
  //
  // <Stations stations={this.state.stations} />
  //
  // <Footer />



  ////use when implementing react router
  // render() {
  //   return (
  //     <Router>
  //       <div className="App">
  //         <Navbar
  //           currentUser={ this.state.currentUser }
  //           loginButtonClicked={ this.loginButtonClicked }
  //           logoutButtonClicked={ this.logoutButtonClicked } />
  //
  //         <div className="container main">
  //           <Route exact path="/" component={ () => <Home currentUser={ this.state.currentUser } /> } />
  //           <Route path="/profile" component={ Profile }/>
  //         </div>
  //
  //         <Footer />
  //       </div>
  //     </Router>

}

  //
  // App.contextTypes = {
  //   router: React.PropTypes.object
  // };


export default App;
