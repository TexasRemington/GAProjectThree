var express = require('express');
var router = express.Router();
var Station = require('../models/station');

router.get('/', function(req,res){
  Station.find({}, function(err, stations){
    if(err){ console.log(err); }

    res.json(stations);
  });
});


router.get('/:id',function(req,res,next){
  Station.find({ _id: req.params.id },function(err,station){
    if(err){ console.log(err); }

    res.json(station);
  });

  var newStation = new Station({
    stationName: req.body.name,
    owner: req.body.owner,
    dateCreated: req.body.dateCreated,
    station_id: req.body.station_id,
    location: req.body.location
  });

  newStation.save(function(err, station){
    if(err){
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).json({
        status: 'OK',
        station: station
      });
    }
  });

  });




/* Update a blog post */
router.patch('/',function(req,res,next){
  Station.findById(req.body.id , function(err,station){
    if(err) console.log(err);

    station.name = req.body.name || station.name;
    station.owner = req.body.owner || station.owner;
    station.dateCreated = req.body.dateCreated || station.dateCreated;
    station.station_id = req.body.station_id || station.station_id;

    station.save(function(err, station){
      if(err) console.log(err);

      res.json({
        status: 'updated!',
        updated_station: station
      });
    });

  });
});


/* Delete a blog post */
router.delete('/',function(req,res,next){

  Station.findByIdAndRemove(req.body.id,function(err, station){
    if(err) console.log(err);
    res.json({
      status: 'deleted!',
      station: station
    });
  });

});

module.exports = router;
