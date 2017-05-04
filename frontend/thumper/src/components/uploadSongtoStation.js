import React, { Component } from 'react';



class UploadSongtoStation extends Component {

  constructor(props){
    super(props)
    this.state={
      stationclicked: this.props.stationclicked,
      stationhasbeenclicked: this.props.stationhasbeenclicked
    };
  }

  render() {
    //
    // const Showinput = ()=>{
    //
    //   console.log('inside UploadSongtoStation');
    //
    //   console.log('inside UploadSongtoStation and value of stationclicked is ', this.props.stationclicked);
    //
    //   if (this.props.stationclicked){
    //     return(
    //       <div><p>You have clicked station {this.props.stationclicked.stationName} </p></div>
    //     );
    //   }else{
    //     return(<div><h3>click a station to upload a song!</h3></div>);
    //   }
    // }

    console.log('stationhasbeenclicked in uploadSongtoStation',this.state.stationhasbeenclicked);
    console.log('stationclicked in uploadSongtoStation',this.state.stationclicked);

    const Stationclickedname = ()=>{
      if (this.state.stationhasbeenclicked===true){
        return(<div><h3>{this.state.stationclicked.stationName}</h3></div>)
      }else if (this.state.stationhasbeenclicked===false){
        return(<div><h3>click on a station to upload songs!</h3></div>)
      }else if (this.state.stationshasbeenclicked===null){
        return(<div><h3>oh no</h3></div>)
      } else {
        return(<div><h3>dont know</h3></div>)
      }
    }

    return (
      <div>
        <h2>Hello from UploadSongtoStation</h2>
        <Stationclickedname/>
      </div>
    );
  }
}

export default UploadSongtoStation;
