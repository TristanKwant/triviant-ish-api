

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function createGame (hook) {
    hook.data = {
      title: `${hook.params.user.name}'s Game`,
      word: newWord(),
      playerIds: [hook.params.user._id]
    };

    return Promise.resolve(hook);
  };
};
