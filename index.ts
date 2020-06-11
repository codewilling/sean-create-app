import express = require('express');
import path = require('path')
// Create a new express application instance
const app: express.Application = express();
const port = process.env.PORT || 5555;


app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.send({"greeting":"error"});
});

app.listen(port, function () {
  console.log('Example app listening on port 5555!');
});