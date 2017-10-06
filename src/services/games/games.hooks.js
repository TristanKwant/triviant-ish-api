const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const createGame = require('../../hooks/create-game');
const updateGame = require('../../hooks/update-game');
const fixPlayerArray = require('../../hooks/fix-player-array');
const { populate } = require('feathers-hooks-common');

const playersSchema = {
  include: {
    service: 'users',
    nameAs: 'players',
    parentField: 'playerIds',
    childField: '_id',
    Field: 'points',

  }
};


const isGameJoinable = require('../../hooks/is-game-joinable');


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [createGame()],
    update: [updateGame()],
    patch: [updateGame()],
    remove: []
  },

  after: {
    all: [populate({ schema: playersSchema }), fixPlayerArray(), isGameJoinable()],
    // all: [
    //   fixPlayerArray(),
    //   commonHooks.populate({ schema: playersSchema }),
    //   commonHooks.when(
    //     hook => hook.params.provider,
    //     commonHooks.discard('word')
    //   )
    // ],
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
