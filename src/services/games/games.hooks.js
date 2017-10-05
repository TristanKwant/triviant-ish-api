const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const createGame = require('../../hooks/create-game');
const updateGame = require('../../hooks/update-game');

const playersSchema = {
  include: {
    service: 'users',
    nameAs: 'players',
    parentField: 'playerIds',
    childField: '_id'
  }
};

const isGameJoinable = require('../../hooks/is-game-joinable');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [createGame()],
    update: [updateGame()],
    patch: [updateGame()],
    remove: []
  },

  after: {
    all: [populate({ schema: playersSchema }), isGameJoinable()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
