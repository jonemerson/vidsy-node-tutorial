let express = require('express');
let router = express.Router();

let monk = require('monk');
let db = monk('localhost:27017/vidzy');

router.get('/', function(req, res) {
    let collection = db.get('videos');
    collection.find({}, function(err, videos){
        if (err) throw err;
      	res.json(videos);
    });
});

module.exports = router;
