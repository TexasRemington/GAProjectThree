var express = require('express');
var router = express.Router();
var Station = require('../models/station');
var fs = require('fs');

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



  // stationName: { type: String, required: false },
  // owner: { type: String, required: false },
  // password: { type: String, required: false},
  // dateCreated: {type: Date, default:Date.now()},
  // station_id: { type: String, required: false},
  // lat: { type: Number, required: false },
  // lon: { type: Number, required: false},
  // songidlist: { type : Array , "default" : [] }



  router.post('/addmusic',function(req,res,next){
    var file = "../socket/playlist/"+req.body.songid+'.'+req.body.filetype;
    Station.findOne({station_id: req.body.stationid}, function(err,station){
      if (err) console.log(err);
      // data_uri:data_uri,
      // filename:filetype,
      // stationid:stationid
      var obj = {};
      obj["01"] = req.body.filename;
      obj["02"] = req.body.songid;

      station.songidlist.push(obj);
      station.save(function(err,station){
        if (err){
          console.log(err);
        }else{
          fs.writeFile(req.body.data_uri, file, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
       }
      });
    });
  })



router.post('/addstation', function(req,res,next){
  console.log('in addstation and the req.body.stationname is', req.body.stationname);
  var newStation = new Station({
    stationName:req.body.stationname,
    owner:req.body.owner,
    password: req.body.password,
    station_id: req.body.station_id,
    lat: req.body.lat,
    lon: req.body.lon
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
})




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
