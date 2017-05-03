import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
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
      authorized: false
    }
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
 handleLogIn(username, password){
 {/*call to the backend and bcrypt goes here*/}
   var self = this;
   console.log('inside login in App. username: ', username, ' password: ', password);
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
             authorized: true
           });
         }

         if (response.data==='passwordsdontmatch'){
           self.setState({
             authorized: false
           });
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
   console.log('inside signup in App. username: ', username, ' password: ', password);
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
             authorized: true
           });
         }

         if (response.data==='500error'){
           self.setState({
             authorized: false
           });
         }

       })
       .catch(function (error) {
         console.error("error from axios App.js", error);
       });
   });
 }



  componentWillMount(){
    this.setState({stations: [
      {
        owner: 'Remmington',
        stationName: 'GA WDI-Hot-Tracks',
        dateCreated: 'May 1, 2017'
      },
      {
        owner: 'Jorge Cano',
        stationName: 'Spring Mix Master 2017',
        dateCreated: 'April 30th, 2017'
      },
      {
        owner: 'Chris Jauregui',
        stationName: 'Peter is a Platypus',
        dateCreated: 'April 29th, 2017'
      },
      {
        owner: 'Peter Weyand',
        stationName: 'Hackers Hot Love Techno Trill',
        dateCreated: 'April 27th, 2017'
      }
    ]});
  }
  //
  // componentWillMount(){
  //   this.setState({stationsongs: [
  //     {
  //       songId, '9823497',
  //       title: 'Informer',
  //       artist: 'Snow',
  //       album: '12 Inches of Snow'
  //     },
  //     {
  //       songId, '0982343',
  //       title: 'Neutral Milk Hotel',
  //       artist: 'Aeroplane Over The Sea',
  //       album: 'In the Aeroplane Over the Sea'
  //     },
  //     {
  //       songId, '1038592',
  //       title: 'Daftendirekt',
  //       artist: 'Daft Punk',
  //       album: 'Homework'
  //     },
  //     {
  //       songId, '2058239',
  //       title: 'Ambitionz Az a Ridah',
  //       artist: 'Tupac',
  //       album: 'All Eyez on Me'
  //     },
  //     {
  //       songId, '2398729',
  //       title: 'Grown Up',
  //       artist: 'Danny Brown',
  //       album: 'Grown up'
  //     },
  //     {
  //       songId, '2098300',
  //       title: 'Fuck Up Some Commas',
  //       artist: 'Future',
  //       album: 'DS2'
  //     },
  //   ]});
  // }


  render() {

    const xStationsPagex = () => {
      if (this.state.authorized === true){
        return(
          <div>
           <AddStations />
           <Stations stations={this.state.stations} />
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
          <About />
          <Footer />
        </div>
      )
    }

    const xLoginPagex =  ()=> {
      return(
        <div>
          <Login  handleLogIn ={this.handleLogIn.bind(this)}
                  handleSignUp={this.handleSignUp.bind(this)}/>
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


export default App;
