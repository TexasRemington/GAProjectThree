var express = require('express');
var router = express.Router();
var Profile = require('../models/profile');


var bcryptaspromised = require('bcrypt-as-promised');
const saltRounds = 10;




router.get('/', function(req,res){
  Profile.find({}, function(err, profiles){
    if(err){ console.log(err); }

    res.json(profiles);
  });
});


router.get('/:id',function(req,res,next){
  Profile.find({ _id: req.params.id },function(err,profile){
    if(err){ console.log(err); }

    res.json(profile);
  });
});

/* Add a blog post */
router.post('/',function(req,res,next){

  var newProfile = new Profile({
    name: req.body.name,
    picture: req.body.picture,
    provider: req.body.provider,
    user_id: req.body.user_id
  });

  newProfile.save(function(err, profile){
    if(err){
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).send({
        status: 'OK',
        profile: profile
      });
    }
  });

});

/* Update a blog post */
router.patch('/',function(req,res,next){
  Profile.findById(req.body.id , function(err,profile){
    if(err) console.log(err);

    profile.name = req.body.name || profile.name;
    profile.picture = req.body.picture || profile.picture;
    profile.provider = req.body.provider || profile.provider;
    profile.user_id = req.body.user_id || profile.user_id;

    profile.save(function(err, profile){
      if(err) console.log(err);

      res.json({
        status: 'updated!',
        updated_profile: profile
      });
    });

  });
});


/* Delete a blog post */
router.delete('/',function(req,res,next){

  Profile.findByIdAndRemove(req.body.id,function(err, profile){
    if(err) console.log(err);
    res.json({
      status: 'deleted!',
      profile: profile
    });
  });

});


//signup functionality below





function postPass(hashedpass, sendusername, res){

	console.log("POSTPASS");

	console.log('hashedpass ', hashedpass);
	console.log('sendusername ', sendusername);



	var newProfile = new Profile({
    	password: hashedpass,
    	username: sendusername,
	});


  newProfile.save(function(err, post){
    if(err){
      res.status(500).send('500error');
    }else{
      res.status(200).json('profileposted');
    }
  });


}






router.post('/signup', function(req,res,next){

	var foundmatch = false;
	var loopcounter = 0;
	var postslength = 0;


  console.log('inside signup on backend');

	var promise = new Promise(function(resolve, reject){
		Profile.find({}, function(err,posts){
      console.log('inside profile loop in login promise. posts: ', posts);
			postslength = posts.length;
			posts.forEach(function(post){
				loopcounter+=1;
				if (post.username === req.body.username){
					foundmatch = true;
					reject(true);
				}else if(loopcounter===postslength && foundmatch===false && loopcounter != 0){
					resolve(true);
				}
			});
		});


	});


	promise.then(function(resolve){
    console.log('inside promise login resolve first line. resolve: ', resolve);
		if(resolve){
			bcryptaspromised.hash(req.body.password, saltRounds)
				.then(function(hash,err){
          console.log('right before postpass, hash ', hash, ' username ', req.body.username, ' res ', res);
					postPass(hash, req.body.username, res);
					//res.json({'result': 'resolve'});
				});
		}

	}, function(reject){
    console.log('inside promise login reject first line. reject: ', reject);
		if(reject){
			res.send('statusreject')
		}
	});

});




router.post('/login', function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var redirectistrue = false;
	var numbernomatches = 0;


  console.log('inside login on backend');


		Profile.find({}, function(err,posts){
      console.log('inside profileSchema search');
			postslength = posts.length;
			posts.forEach(function(post){

				console.log("post ", post);
				console.log("req.body.username ", req.body.username, " req.body.password ", req.body.password);

				if (post.username == req.body.username){
					bcryptaspromised.compare(req.body.password, post.password)
							.then(function(result){
									res.send('passwordsmatch');
							})
							.catch(bcryptaspromised.MISMATCH_ERROR, function(result){
								  res.send('passwordsdontmatch');
							});
				}else{
					numbernomatches += 1;
				}

			});

			if (numbernomatches == postslength){
				res.json('passwordsdontmatch');
			}
		});

});



module.exports = router;
