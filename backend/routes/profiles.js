var express = require('express');
var router = express.Router();
var Profile = require('../models/profile');

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
      res.status(200).json({
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


	var newProfileSchema = new profileSchema({
    	password: hashedpass,
    	username: sendusername,
	});

  newProfileSchema.save(function(err, post){
    if(err){
      res.status(500).send({
        status: "Error",
        error: err
      });
    }else{
      res.status(200).json({
        status: "ok",
        post: post
      });
    }
  });


}






router.post('/signup', function(req,res,next){

	var foundmatch = false;
	var loopcounter = 0;
	var postslength = 0;

	var promise = new Promise(function(resolve, reject){

		profileSchema.find({}, function(err,posts){
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
		if(resolve){
			bcryptaspromised.hash(req.body.password, saltRounds)
				.then(function(hash,err){
					postPass(hash, req.body.username, res);
					//res.json({'result': 'resolve'});
				});
		}

	}, function(reject){
		if(reject){
			res.json({'status':'reject'})
		}
	});

});




router.post('/login', function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var redirectistrue = false;
	var numbernomatches = 0;

		profileSchema.find({}, function(err,posts){
			postslength = posts.length;
			posts.forEach(function(post){

				//console.log("post ", post);
				//console.log("req.body.username ", req.body.username, " req.body.password ", req.body.password);

				if (post.username == req.body.username){
					bcryptaspromised.compare(req.body.password, post.password)
							.then(function(result){
									res.json({'passwords': 'matched'});
							})
							.catch(bcryptaspromised.MISMATCH_ERROR, function(result){
								  res.json({'goto':'passwordsdontmatch'});
							});
				}else{
					numbernomatches += 1;
				}

			});

			if (numbernomatches == postslength){
				res.json({'goto':'passwordsdontmatch'});
			}
		});

});



module.exports = router;
