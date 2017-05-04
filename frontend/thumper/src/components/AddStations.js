import React, { Component } from 'react';
import './AddStations.css';

class AddStations extends Component {

    constructor(props){
      super(props);

      this.state = {
        owner: '',
        stationname: '',
        data_uri: null,
        processing: false,
        filename: null,
        filetype: null,
        musiclist: []
      };
    }

    handleSubmit(e) {

       e.preventDefault();
       console.log('inside handleform in addstation with owner ', this.state.owner, ' stationname ', this.state.stationname);
       this.props.handleAddStation(this.state.owner, this.state.stationname, this.state.data_uri, this.state.filename, this.state.filetype);
       this.setState({
         owner:'',
         stationname:''
       })


      //  const _this = this;
       //
      //  this.setState({
      //    processing: true
      //  });
       //
      //  const promise = $.ajax({
      //    url: '/api/v1/image',
      //    type: "POST",
      //    data: {
      //      data_uri: this.state.data_uri,
      //      filename: this.state.filename,
      //      filetype: this.state.filetype
      //    },
      //    dataType: 'json'
      //  });
       //
      //  promise.done(function(data){
      //    _this.setState({
      //      processing: false,
      //      uploaded_uri: data.uri
      //    });
      //  });
     }

    handleFile(e) {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onload = (upload) => {
        this.setState({
          data_uri: upload.target.result,
          filename: file.name,
          filetype: file.type
        });
      };

      reader.readAsDataURL(file);
    }


  render() {

    let processing;
    let uploaded;

    if (this.state.uploaded_uri) {
      uploaded = (
        <div>
          <h4>File uploaded!</h4>
        </div>
      );
    }

    if (this.state.processing) {
      processing = "Processing...";
    }

    return (
      <div>
        <h3>Add Station</h3>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <div>
            <label>Owner</label><br />
            <input type="text" ref="input1"
            onChange={(e)=>{this.setState({owner: e.target.value});}}
            value={this.state.owner}/>
          </div>
          <div>
            <label>Station Name</label><br />
            <input type="text" ref="input2"
            onChange={(e)=>{this.setState({stationname: e.target.value});}}
            value={this.state.stationname}/>
          </div>
          <div>
            <input className='fileInput' type="file" onChange={(e)=>this.handleFile(e)} />
          </div>
          <div>
            <input disabled={this.state.processing} className='btn btn-primary' type="submit" value="Upload" onClick={(e)=>this.handleForm(e)}/>
            {processing}
          </div>
        </form>
        {uploaded}
      </div>
    );
  }
}

export default AddStations;
