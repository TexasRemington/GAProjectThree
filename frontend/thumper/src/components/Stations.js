import React, { Component } from 'react';
import ListStations from './ListStations';


class Stations extends Component {
  // constructor(props){
  //   super(props);
  //   Stations:{
  //
  //   }
  // }


//
// componentWillMount(){
//   this.props.clearRedirect()
// }



  render() {
    let listStations;
    if(this.props.stations){
      listStations = this.props.stations.data.map(station => {
        // console.log(station);
        return (
          <ListStations key={station._id} station={station} handleStationClicked={this.props.handleStationClicked.bind(this)}/>
        );
      });
    }
    return (
      <div className="Stations">
        {listStations}
      </div>
    );
  }
}

export default Stations;

// import React, { Component } from 'react';
//
//
// class Stations extends Component {
//   render() {
//     let listStations;
//     if(this.props.stations){
//       listStations = this.props.stations.map(station => {
//         console.log('station is: ',station);
//         return (
//           <li key={station.owner} station={station}>
//             <strong>{station.owner}</strong> - {station.stationName} - {station.dateCreated}
//             <Songs songs={station.songs}/>
//           </li>
//         );
//       });
//     }
//
//     console.log('this.props.songs: ',this.props.songs)
//     return (
//       <div className="Stations">
//         <ol className="Stations">
//         {listStations}
//         {/*this.props.songs*/}
//         </ol>
//       </div>
//     );
//   }
// }
//
// export default Stations;
