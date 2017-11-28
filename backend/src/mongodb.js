const mongoose = require('mongoose');

module.exports = function () {
  const app = this;

  mongoose.createConnection(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
