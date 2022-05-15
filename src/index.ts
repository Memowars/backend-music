import app from '../src/app';
const { dbConnection } = require('./database/config');

dbConnection();

app.listen(process.env.PORT, () => {
  return console.log(`server is listening on ${process.env.PORT}`);
});
