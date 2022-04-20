import app from '../src/app';
const { dbConnection } = require('./database/config');

const port = 3000;
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

dbConnection();
