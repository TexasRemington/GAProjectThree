import React, { Component } from 'react';


class AddSongs extends Component {
  constructor(){
    super();
    newSong:{}
  }
  handleSubmit(e){
  //   if(this.refs.title.value === '');{
  //     alert('Song Title is required')
  //   } else{
  //     this.setState({newSong:{
  //       title: this.refs.title.value,
  //     }}, function(){
  //       console.log(this.state);
  //   });
  // }
  //   e.preventDefault();
  }



  render() {
    return (
      <div className="row">
        <div className="AddSongs">
           <form onSubmit={this.handleSubmit.bind(this)}>
             <label>
               <h3>Add a Song To Your Playlist</h3>
               <h5><strong>Title:</strong></h5>
               <input type="text" name="title" />
               <h5><strong>Artist:</strong></h5>
               <input type="text" name="artist" />
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



// songs to Add
// {
//   stationName: 'GA WDI-Hot-Tracks',
//   title: 'Informer',
//   artist: 'Snow',
//   album: '12 Inches of Snow'
// },
// {
//   stationName: 'GA WDI-Hot-Tracks',
//   title: 'Neutral Milk Hotel',
//   artist: 'Aeroplane Over The Sea',
//   album: 'In the Aeroplane Over the Sea'
// },
// {
//   stationName: 'GA WDI-Hot-Tracks',
//   title: 'Daftendirekt',
//   artist: 'Daft Punk',
//   album: 'Homework'
// },
// {
//   stationName: 'GA WDI-Hot-Tracks',
//   title: 'Ambitionz Az a Ridah',
//   artist: 'Tupac',
//   album: 'All Eyez on Me'
// },
// {
//   stationName: 'GA WDI-Hot-Tracks',
//   title: 'Grown Up',
//   artist: 'Danny Brown',
//   album: 'Grown up'
// },
// {
//   songId: '2098300',
//   stationName: 'GA WDI-Hot-Tracks',
//   title: 'Fuck Up Some Commas',
//   artist: 'Future',
//   album: 'DS2'
// },
//

export default AddSongs;

// trying to get this code to submit songs to a 'station' or playlist

/* <form onSubmit={ this.handleSubmit.bind(this) } className="form-add-quote">
  <div className="row">
    <textarea
      onChange={ e => { this.setState({ title: e.target.value }) } }
      value={ this.state.title }
      className="form-control"
      rows="3"
      placeholder="Title"></textarea>
  </div>
  <div className="row">
    <input
      onChange={ e => { this.setState({ artist: e.target.value }) } }
      value={ this.state.artist }
      className="form-control"
      type="text"
      placeholder="Artist" />
  </div>
  <div className="row">
    <button className="btn btn-primary">Add Quote</button>
  </div>
</form> */
