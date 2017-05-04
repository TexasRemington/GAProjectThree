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
     }



  render() {


    return (
      <div>
        <h3>Add Station</h3>
        <form>
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
            <input className='btn btn-primary' type="submit" value="Submit Station :P" onClick={(e)=>this.handleSubmit(e)}/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStations;
