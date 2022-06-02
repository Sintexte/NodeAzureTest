var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send("<h1>This is an APi for an Android App</h1>")
})