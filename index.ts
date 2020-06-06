import express = require('express');
import path = require('path')
// Create a new express application instance
const app: express.Application = express();


app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.send({"greeting":"error"});
});

app.listen(5555, function () {
  console.log('Example app listening on port 5555!');
});