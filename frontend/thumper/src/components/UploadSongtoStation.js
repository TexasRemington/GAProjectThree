import React, { Component } from 'react';
import './AddStations.css';


class UploadSongtoStation extends Component {

  constructor(props){
    super(props)
    this.state={
      stationclicked: this.props.stationclicked,
      stationhasbeenclicked: this.props.stationhasbeenclicked,
      owner: '',
      stationname: '',
      data_uri: null,
      processing: false,
      filename: null,
      filetype: null,
      musiclist: [],
      processing: false
    };
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    console.log('value of file in UploadSongtoStation', file);


    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };
    reader.readAsDataURL(file);
  }


  handleForm(e){
    e.preventDefault();
    this.props.handleAddSong(this.state.data_uri,this.state.filename,this.state.filetype, this.state.stationclicked.station_id);
  }

  render() {


    console.log('stationhasbeenclicked in uploadSongtoStation',this.state.stationhasbeenclicked);
    console.log('stationclicked in uploadSongtoStation',this.state.stationclicked);

    const Stationclickedname = ()=>{

      if (this.state.stationhasbeenclicked===true){
        //
        // let processing;
        // let uploaded;
        //
        // if (this.state.uploaded_uri) {
        //   uploaded = (
        //     <div>
        //       <h4>File uploaded!</h4>
        //     </div>
        //   );
        // }
        //
        // if (this.state.processing) {
        //   processing = "Processing...";
        // }

        return(
          <div>
            <h3>Add songs to station {this.state.stationclicked.stationName}</h3>
              <form>
                <input className="fileInput" type="file" title="choose a cool song!" onChange={(e)=>{this.handleFile(e)}} />
                <input className='btn btn-primary' type="submit" value="Upload" onClick={(e)=>{this.handleForm(e)}}/>
              </form>
          </div>
        )
      } else {
        return(<div><h3>click on a station to upload a song!</h3></div>)
      }
    }

    return (
      <div>
        <h2>Hello Sailor! Pick Your Poison :D</h2>
        <Stationclickedname/>
      </div>
    );
  }
}
export default UploadSongtoStation;
