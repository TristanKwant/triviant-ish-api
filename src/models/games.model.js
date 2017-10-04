
// games-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

class GameClass {
  hasTurn(user) {
    return !!user; // TODO
  }

  checkGuess(user, guess) {
    return !!user && !!guess; // TODO
  }

  nextPlayerIndex() {
    return 1; // TODO
  }

  isNotJoinableBy(user) {
    return !this.isJoinableBy(user);
  }

  isJoinableBy(user) {
    return this.isJoinable() && !this.hasJoined(user);
  }

  hasJoined(user) {
    this.playerIds.includes(user._id);
  }

  isJoinable() {
    return !this.isFull() && !this.isStarted();
  }

  isFull() {
    return this.playerIds.length >= 2;
  }

  isStarted() {
    return this.guesses.length > 0;
  }
}

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  // const questionSchema = new mongooseClient.Schema({
  //   questions: { type: [Object], required: true },
  //
  // });

  const playerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    points: [String], // of counter OF ANSWER:
  });

  const games = new mongooseClient.Schema({
    title: { type: String, required: true },
    question: [{ type: Schema.Types.ObjectId, ref: 'questions' }],
    players: [playerSchema],
    rounds: {type: Number},
    started: { type: Boolean, default: false },
    winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
    currentPlayerIndex: { type: Number, default: 0 },
    player: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'users' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    draw: { type: Boolean, default: false },
  });

  games.loadClass(GameClass);
  return mongooseClient.model('games', games);
};
