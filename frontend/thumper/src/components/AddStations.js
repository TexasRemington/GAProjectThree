import React, { Component } from 'react';

class AddStations extends Component {
  render() {
    return (
      <div className="row">
          <div className="AddStations">
            <form>
              <label>
                <h3>Add a Station</h3>
                <h5><strong>Station Title:</strong></h5>
                <input type="text" name="title" />
                <h5><strong>Owner:</strong></h5>
                <input type="text" name="owner" />
                <br />
                <br />
                <input type="submit" value="Submit" />
              </label>
            </form>
          </div>
      </div>
    );
  }
}

export default AddStations;
