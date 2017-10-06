// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const QUESTIONS = [
  {
    id: 'question2',
    question: 'Who won world cup 2002?',
    optionA: "Brazil",
    optionB: 'France',
    optionC: 'Italy',
    optionD: 'Germany',
    correct: 'Brazil'
  },

];

function newWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}


function questions(){

}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function createGame (hook) {
    hook.data = {
      title: `${hook.params.user.name}'s Game`,
      playerIds: [hook.params.user._id],
      points: [{playerId: hook.params.user._id, points: 12}],
      questions: QUESTIONS
    };





    return Promise.resolve(hook);
  };
};
