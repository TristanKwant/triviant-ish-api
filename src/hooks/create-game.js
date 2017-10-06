// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const QUESTIONS = [
  {
    id: 'question2',
    question: 'Who won world cup 2002?',
    optionA: ['Brazil', true],
    optionB: ['France', false],
    optionC: ['Italy', false],
    optionD: ['Germany', false],
    correct: 'Brazil'
  },

  {

    question: 'BB-8 is an astromech droid from what film franchise?',
    optionA: ['Star Trek', false],
    optionB: ['Hitchhikers Guide to the Galaxy', false],
    optionC: ['Star Wars', true],
    optionD: ['X-men', false],
    correct: 'Star Wars'
  },
  {

    question: 'What\'s Faisals favorite food?',
    optionA: ['Couscous', false],
    optionB: ['Pizza', false],
    optionC: ['Tuna', true],
    optionD: ['Hutspot', false],
    correct: 'Tuna'
  },

  {

    question: 'Fonts that contain small decorative lines at the end of a stroke are known as what?',
    optionA: ['Italic Fonts', false],
    optionB: ['Fonts', false],
    optionC: ['Sans-Serif Fonts', false],
    optionD: ['Serif Fonts', true],
    correct: 'Serif Fonts'
  },
  {

    question: 'Nintendo is a consumer electronics and video game company founded in what country?',
    optionA: ['Japan', true],
    optionB: ['China', false],
    optionC: ['Korea', false],
    optionD: ['USA', false],
    correct: 'Japan'
  }

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
