import app from './app';
const { dbConnection } = require('./database/config');
require('dotenv').config();
dbConnection();

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App is running on port ' + port);
});
