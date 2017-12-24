
let Artists = require('../models/Artists');

exports.all = function (req, res) {
    Artists.all(function (err, docs){
        if (err){
            console.log(err);
            return res.sendStatus(500)
        }
        res.send(docs)
    })
};

exports.findById = function(req, res){
    Artists.findById(req.params.id, function(id, docs){
        // if (err){
        //     console.log(err);
        //     return res.sendStatus(500)
        // }
        res.send(docs)
    })
};

exports.create = function(req, res){
    	let artist = {
		name : req.body.name
	};
    Artists.create(artist, function(err, docs){
        if (err){
            console.log(err);
            return res.sendStatus(500)
        }
        res.send(docs) // artist
    })
};

exports.change = function(req,res){
    let newName= {
        name: req.body.name
    };
    Artists.change(req.params.id, req.body.name, function(err, docs){
        if (err){
            console.log(err);
            return res.sendStatus(500)
        }
        res.send(docs)
    })
};

exports.remove = function( req, res){
    Artists.remove(req.params.id, function(err, docs){
        if (err){
            console.log(err);
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    });
};
