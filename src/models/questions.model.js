// questions-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const questions = new mongooseClient.Schema({
    questions: { type: [Object], required: true },

  });

  return mongooseClient.model('questions', questions);
};