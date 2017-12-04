var express = require('express');
var app = express(); // server

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
        name: 'Iron Maiden'
    },

]
app.get('/', function(req, res) { // request, response
  res.send('hello world');
});
app.get('/artists', function(req, res) { // request, response
  res.send(artists);
});
app.get('/artists/:id', function(req, res) { // request, response
  console.log('req.params', req.params) // request line
  console.log('req.params.id',req.params.id) // request line
  var artist = artists.find((item)=>{
      return item.id === +req.params.id
  })
  res.send(artist);
});



app.listen(3012,()=>console.log('App is sterted')) // start