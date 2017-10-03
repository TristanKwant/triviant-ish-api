const users = require('./users/users.service.js');
const games = require('./games/games.service.js');
const questions = require('./questions/questions.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(games);
  app.configure(questions);
};
