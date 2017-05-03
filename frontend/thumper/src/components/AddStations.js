import React, { Component } from 'react';

class AddStations extends Component {

    constructor(props){
      super(props);

      this.state = {
        owner: '',
        stationname: '',
        
      };
    }


    handleForm(e){
      e.preventDefault();
      console.log('inside handleform in addstation with owner ', this.state.owner, ' stationname ', this.state.stationname);
      this.props.handleAddStation(this.state.owner, this.state.stationname);
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
          <input
              type="file"
              ref={(input) => { this.filesInput = input; }}
              name="file"/>
          </div>
          <div>
            <input type="submit" value="Submit" onClick={(e)=>this.handleForm(e)}/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStations;
