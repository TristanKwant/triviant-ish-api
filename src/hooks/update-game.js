const errors = require('feathers-errors');

const JOIN_GAME = 'JOIN_GAME';
const ADD_POINTS = 'ADD_POINTS';
const GUESS = 'GUESS';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function joinGame (hook) {
  return  hook.app.service('games').get(hook.id)
      .then((game) => {
        const { players, points} = game;
        // const playerIds = players.map((p) => (p.userId.toString()));
        const { type, payload } = hook.data;
        const { user } = hook.params;

        switch(type) {
          case JOIN_GAME : {


            hook.data = {
              playerIds: game.playerIds.concat(user._id)
            };

            return hook;
          };

          case ADD_POINTS : {
            // hook.data.players[0].points = 0
            // players.map((p) => (
            //   hook.data.p.points = 2
            // ) );
            // hook.data.game = 0
            // hook.data.players = players.map(p => {

            hook.data.players = players.map(p => {

              // hook.data = {
              //   points: game.points +1
              // }
              p.point


             return p;
           });
          // hook.data = {
          //   points: 38
          // }


          //   return hook;
          // });



            return hook;
          }


          case GUESS : {
            if (!game.hasJoined(user)) {
              throw new errors.Forbidden('You are not a player in this game, sorry!');
            }

            if (!game.hasTurn(user)) {
              throw new errors.Forbidden('It\'s not your turn. Whoops!');
            }

            const guessRight = game.checkGuess(user, payload);

            hook.data = {
              guesses: game.guesses.concat(payload),
            };

            if (!guessRight) {
              hook.data.currentPlayerIndex = game.nextPlayerIndex();
            }

            return hook;
          }

          default :
            return Promise.resolve(hook);
        }
      });
  };
};
