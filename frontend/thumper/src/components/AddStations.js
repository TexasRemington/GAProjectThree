import React, { Component } from 'react';

class AddStations extends Component {
  render() {
    return (
      <div>
        <h3>Add Station</h3>
        <form>
          <div>
            <label>Owner</label><br />
            <input type="text" ref=""/>
          </div>
          <div>
            <label>Station Name</label><br />
            <input type="text" ref=""/>
          </div>
          <div>
            <label>Created Date</label><br />
            <input type="text" ref=""/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStations;
