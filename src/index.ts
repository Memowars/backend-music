import app from './app';
const { dbConnection } = require('./database/config');

dbConnection();

var port = process.env.PORT || 3000;

app.listen(port, () => {
  return console.log(`server is listening on ${process.env.PORT}`);
});
