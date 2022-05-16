const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://rockstar:yzlGGYAS8kLMUD5x@cluster0.cqcab.mongodb.net/music',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('DB Online');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConnection,
};
