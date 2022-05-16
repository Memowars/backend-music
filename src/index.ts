import app from './app';
const { dbConnection } = require('./database/config');

dbConnection();

app.listen(process.env.PORT || 3000, () => {
  return console.log(`server is listening on ${process.env.PORT}`);
});
