const express = require('express');

const app = express();
const routes = require('./routes')
require('./config')
const PORT = 5000;

app.use('/', routes)
app.listen(PORT, ()=> {
  console.log('server listen on ' + PORT)
});
