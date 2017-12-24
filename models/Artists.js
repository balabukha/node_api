
let ObjectID = require('mongodb').ObjectID;
let db = require('../db');


exports.all = function(cb){
    db.get().collection('artists').find().toArray((err, docs)=>{
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        cb(err, docs);
    });
};

exports.findById = function(id, cb){
    db.get().collection('artists').findOne({ _id: ObjectID(id)}, (err, docs) =>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            cb(err, docs)
        });
};

exports.create = function(artist, cb) {
        db.get().collection('artists').insert(artist, function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            cb(err, result);
        });
};

exports.change = function(id, name, cb) {
db.get().collection('artists').updateOne(
	{_id: ObjectID(id)},
	{name},
	(err, docs) =>{
    if(err){
        console.log(err);
        return res.sendStatus(500);
    }
    cb(err, docs)});
};

exports.remove = function(id, cb) {
    db.get().collection('artists').deleteOne(
        {_id: ObjectID(id)},
        (err, docs) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            cb(err, docs);
        });
};