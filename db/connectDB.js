const mongoose = require('mongoose');

const connectDb = (url) => {
  mongoose
    .connect(url, {
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      heartbeatFrequencyMS: 1000,
    })
    .then(() => {})
    .catch((err) => {
      return err;
    });
};

module.exports = connectDb;
