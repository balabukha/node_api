let express = require('express'); //connecting to express

let bodyParser = require('body-parser'); //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;

let ArtistController = require('./controllers/Artists');

let db = require('./db');
let app = express(); // server
// let db;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());



// let artists = [
// 	{
// 		id: 1,
// 		name: 'Metallica'
// 	},
// 	{
// 		id: 2,
// 		name: 'Deep Purple'
// 	},
// 	{
// 		id: 3,
// 		name: 'Iron Maiden'
// 	}
// ];

// main
app.get('/', function(req, res) { // request, response
	res.send('hello world');
});


// GET Method for db in Array

// artists
// app.get('/artists', function(req, res) { // request, response
//   res.send(artists);
//   //   res.sendStatus(200)
// });

// GET Method for dataBase MongoDb
app.get('/artists', ArtistController.all
	// function(req, res) { // request, response
	// db.get().collection('artists').find().toArray((err, docs)=>{
	// 	if (err) {
	// 		console.log(err);
	// 		return res.sendStatus(500);
	// 	}
	// 	// console.log(db.collection('artists'));
	// 	res.send(docs);
	// });

// }
);


// GET Method for db in Array

// artists -> id
// app.get('/artists/:id', function(req, res) { // request, response
//   console.log('req.params', req.params) // request line
//   console.log('req.params.id',req.params.id) // request line
//   var artist = artists.find((item)=>{
//       return item.id === +req.params.id
//   });
//
//   res.send(artist);
// });

// GET Method for dataBase MongoDb

app.get('/artists/:id', ArtistController.findById
// function(req, res) { // request, response
// 	db.get().collection('artists').findOne({ _id: ObjectId(req.params.id)}, (err, docs) =>{
// 		if(err){
// 			console.log(err);
// 			return res.sendStatus(500);
// 		}
// 		res.send(docs);
// 	});
// }
);

// app.post('/artists', function (req, res) {
//     console.log(req.body);
//     if (!req.body) return res.sendStatus(400);
//     res.send('welcome, ' + req.body);
// });



// POST Method for db in Array

// app.post('/artists', function (req, res) {
//     // if (!req.body) return res.sendStatus(400);
//     let artist = {
//         id: Date.now(),
//         name: req.body.name
//     };
//     artists = artists.push(artist);
//     res.send(artist);
// });


// POST Method for dataBase MongoDb

app.post('/artists', ArtistController.create
// function (req,res){
// 	let artist = {
// 		name : req.body.name
// 	};
// 	db.get().collection('artists').insert(artist, function (err, result){
// 		if (err){
// 			console.log(err);
// 			return res.sendStatus(500);
// 		}
// 		res.send(artist);
// 	});
// }
);



// app.put('/artists/:id', function(req,res){
// 	// if (!req.body) return res.sendStatus(400);
// 	// let artist = artists.find((item) => {
// 	// 	return item.id === +req.params.id;
// 	// });
//     //
// 	// artist.name = req.body.name;
// 	// res.sendStatus(200);
//
// });

// PUT Method with MongoDb
app.put('/artists/:id', ArtistController.change
// function(req,res){
// db.get().collection('artists').updateOne(
// 	{_id: ObjectId(req.params.id)},
// 	{name : req.body.name},
// 	(err, docs) =>{
//     if(err){
//         console.log(err);
//         return res.sendStatus(500);
//     }
//         res.sendStatus(200);
// });
// }
);

// app.delete('/artists/:id', function(req, res){
// 	artists = artists.filter((item)=>{
// 		return item.id !== +req.params.id;
// 	});
// 	res.sendStatus(200);
//
// });

// Delete Method with MongoDb
app.delete('/artists/:id', ArtistController.remove
// function(req,res){
//     db.get().collection('artists').deleteOne(
//         {_id: ObjectId(req.params.id)},
//         (err, docs) =>{
//             if(err){
//                 console.log(err);
//                 return res.sendStatus(500);
//             }
//             res.sendStatus(200);
//         });
// }
);




db.connect('mongodb://localhost:27017/myapp', function(err, database){
	if (err) {
		return console.log(err);
	}
	// db = database;
	app.listen(3012,()=>console.log('App is started')); // start
});