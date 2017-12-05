let express = require('express'); //connecting to express
let app = express(); // server
let bodyParser = require('body-parser'); //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());



let artists = [
    {
        id: 1,
        name: 'Metallica'
    },
    {
        id: 2,
        name: 'Deep Purple'
    },
    {
        id: 3,
        name: "Iron Maiden"
    }
];

// main
app.get('/', function(req, res) { // request, response
  res.send('hello world');
});

// artists
app.get('/artists', function(req, res) { // request, response
  res.send(artists);
});

// srtists -> id
app.get('/artists/:id', function(req, res) { // request, response
  console.log('req.params', req.params) // request line
  console.log('req.params.id',req.params.id) // request line
  var artist = artists.find((item)=>{
      return item.id === +req.params.id
  });

  res.send(artist);
});

// app.post('/artists', function (req, res) {
//     console.log(req.body);
//     if (!req.body) return res.sendStatus(400);
//     res.send('welcome, ' + req.body);
// });

app.post('/artists', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    let artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists = artists.push(artist);
    res.send(artist);
});

app.put('/artists/:id', function(req,res){
    if (!req.body) return res.sendStatus(400);
    let artist = artists.find((item) => {
        return item.id === +req.params.id
    });

    artist.name = req.body.name;
    res.send(artist);
});




app.listen(3012,()=>console.log('App is started')); // start