// questions-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const questions = new mongooseClient.Schema({
    question: { type: String },
    optionA: { type: [] },
    optionB: { type: [] },
    optionC: { type: [] },
    optionD: { type: [] },
    correct: { type: String}

  });

  return mongooseClient.model('questions', questions);
};
