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
// import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
// import AddSongs from './components/AddSongs';
import UnauthorizedStations from './components/UnauthorizedStations';
import IpApi from './components/IpApi';
import UploadSongtoStation from './components/UploadSongtoStation';







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
      station_id: '',
      data_uri: null,
      filename:'',
      filetype:'',
      stationclicked: null,
      stationhasbeenclicked:false
    }
    this.redirect = '';
  }





 handleStationClicked(stationobj){
   console.log('inside handleStationClicked');
   console.log('value of the station clicked is: ', stationobj);
   this.setState({
     stationclicked: stationobj,
     stationhasbeenclicked: true
   });
   console.log('value of stationclicked from app handleStationClicked', this.state.stationclicked);
 }



handleAddSong(data_uri, filename, filetype, stationid){

  console.log('value of data_uri', data_uri);
  console.log('value of filename', filename);
  console.log('value of filetype', filetype);

  var songid = Date.now();

  axios.post('http://localhost:5000/stations/addmusic', {
    data_uri:data_uri,
    filename:filename,
    songid:songid,
    filetype:filetype,
    stationid:stationid
  })
  .then((response)=>{
    console.log('music succesfully added to station');
  })
  .catch(function (error) {
     console.error("error in handleAddStation", error);
  });
}




handleAddStation(owner,stationname){


 // this.state.data_uri, this.state.filename, this.state.filetype


  console.log('inside handle add station');
  console.log('value of owner', owner);
  console.log('value of stationname', stationname);
  // console.log('value of data_uri', data_uri);
  // console.log('value of filename', filename);
  // console.log('value of filetype', filetype);
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
           <Stations stations={this.state.stations} handleStationClicked={this.handleStationClicked.bind(this)}/>
           <UploadSongtoStation handleAddSong={this.handleAddSong.bind(this)} stationhasbeenclicked={this.state.stationhasbeenclicked} stationclicked={this.state.stationclicked}/>
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


}
export default App;
