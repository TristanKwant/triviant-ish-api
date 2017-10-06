// src/seeds.js
/* eslint-disable no-console */
const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
 const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

// const user = {
//   name: 'admin',
//   email: 'jamie@gulliver.dev',
//   password: 'abcd1234'
// };

const questions = [
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
    },
    {

      question: 'What do the letters RGB stand for?',
      optionA: ['Roses, Grapes and Berries', false],
      optionB: ['Red, Green and Blue', true],
      optionC: ['Rome, Greenwich and Bangalore', false],
      optionD: ['Rough Girls Band', false]
    },
    {

      question: 'In what year was the first Apple computer released?',
      optionA: ['1971', false],
      optionB: ['1976', true],
      optionC: ['1981', false],
      optionD: ['1986', false]
    },
    {

      question: 'What is a group of owls called?',
      optionA: ['A Parliament', true],
      optionB: ['A Flock', false],
      optionC: ['Owls-United', false],
      optionD: ['A Swarm', false]
    },
    {

      question: 'In Disney\'s "The Little Mermaid" what is the name of the human that Ariel falls in love with?',
      optionA: ['Prince Eric', true],
      optionB: ['Governor Mathijs', false],
      optionC: ['King Faisal', false],
      optionD: ['Sergeant Tristan', false]
    },
    {

      question: 'In the Star Wars universe, who is Luke Skywalker\'s mother?',
      optionA: ['Queen Latifah', false],
      optionB: ['Ariadne Skywalker', false],
      optionC: ['Padme Amidala', true],
      optionD: ['Princess Lea', false]
    },
    {

      question: 'What is the name of the actress who plays Hermione Granger in the Harry Potter series of films?',
      optionA: ['Emma Stone', false],
      optionB: ['Emma Watson', true],
      optionC: ['Eva Longoria', false],
      optionD: ['Kate Hudson', false]
    },
    {

      question: 'Sequoia National Park is located in which U.S. state?',
      optionA: ['Ohio', false],
      optionB: ['Florida', false],
      optionC: ['Mississippi', false],
      optionD: ['California', true]
    },
    {

      question: 'What is the name of the official currency of Costa Rica?',
      optionA: ['Costa Rican Dollar', false],
      optionB: ['Costa Rican Colón', true],
      optionC: ['Costa Rican Peso', false],
      optionD: ['Costa Rican Pound', false]
    },
    {

      question: 'n which South American country would you find the ancient Incan citadel Machu Picchu?',
      optionA: ['Peru', true],
      optionB: ['Argentina', false],
      optionC: ['Colombia', false],
      optionD: ['Venezuela', false]
    },
    {

      question: 'San Marino is a microstate in Europe completely surrounded by what country?',
      optionA: ['Spain', false],
      optionB: ['Greece', false],
      optionC: ['Italy', true],
      optionD: ['France', false]
    },
    {

      question: 'K-pop is a genre of music that originated in what country?',
      optionA: ['Japan', false],
      optionB: ['South Korea', true],
      optionC: ['China', false],
      optionD: ['Vietnam', false]
    },
    {

      question: 'American singer-songwriter Johny Cash passed away in what year?',
      optionA: ['1993', false],
      optionB: ['1998', false],
      optionC: ['2003', true],
      optionD: ['2008', false]
    },
    {

      question: 'A panda\'s daily diet consists almost entirely of what?',
      optionA: ['Bamboo', true],
      optionB: ['French Fries', false],
      optionC: ['Pizza Calzone', false],
      optionD: ['Hoomanz', false]
    },
    {

      question: 'Cynophobia is the fear of what kind of animal?',
      optionA: ['Cats', false],
      optionB: ['Rabbits', false],
      optionC: ['Chickens', false],
      optionD: ['Dogs', true]
    },
    {

      question: 'A flamboyance is a group of what animal?',
      optionA: ['Pandas', false],
      optionB: ['Kangaroos', false],
      optionC: ['Flamingos', true],
      optionD: ['Parrots', false]
    },
    {

      question: 'Napoleon suffered defeat at Waterloo in what year?',
      optionA: ['1815', true],
      optionB: ['1814', false],
      optionC: ['1813', false],
      optionD: ['1812', false]
    },
    {

      question: 'Valletta is the capital of what Mediterranean country?',
      optionA: ['Cyprus', false],
      optionB: ['Malta', true],
      optionC: ['Greece', false],
      optionD: ['Spain', false]
    },
    {

      question: 'In humans, what is the only internal organ capable of regenerating lost tissue?',
      optionA: ['The Kidney', false],
      optionB: ['The Lungs', false],
      optionC: ['The Liver', true],
      optionD: ['The Heart', false]
    },
    {

      question: 'Approximately 2% of all people have what eye color?',
      optionA: ['Blue', false],
      optionB: ['Brown', false],
      optionC: ['Magenta', false],
      optionD: ['Green', true]
    },
    {

      question: 'How many pairs of chromosomes are in found in the average human?',
      optionA: ['46', false],
      optionB: ['23', true],
      optionC: ['20', false],
      optionD: ['40', false]
    },
    {

      question: 'What vitamin is produced when a person is exposed to sunlight?',
      optionA: ['Vitamin A', false],
      optionB: ['Vitamin B', false],
      optionC: ['Vitamin C', false],
      optionD: ['Vitamin D', true]
    },
    {

      question: 'In what month is the Earth closest to the sun?',
      optionA: ['January', true],
      optionB: ['April', false],
      optionC: ['Juli', false],
      optionD: ['November', false]
    },
    {

      question: 'What male tennis player has won the most Grand Slam titles?',
      optionA: ['Nadal', false],
      optionB: ['Federer', true],
      optionC: ['Agassi', false],
      optionD: ['Becker', false]
    },
    {

      question: 'How many holes are there in a full round of golf?',
      optionA: ['6', false],
      optionB: ['12', false],
      optionC: ['18', true],
      optionD: ['24', false]
    },
    {

      question: 'Who was the lead singer of the band "Queen"?',
      optionA: ['Freddy Mars', false],
      optionB: ['Freddy Mercury', true],
      optionC: ['Freddy Venus', false],
      optionD: ['Freddy Saturn', false]
    },
    {

      question: 'What was Jimi Hendrix\'s real name?',
      optionA: ['James Marshall Hendrix', true],
      optionB: ['Jimmy Twofingers', false],
      optionC: ['Jeremy Hendrix', false],
      optionD: ['Jimi Henderson', false]
    },
    {

      question: 'In which U.S. state would you find Mount Rushmore?',
      optionA: ['North Dakota', false],
      optionB: ['Ohio', false],
      optionC: ['Texas', false],
      optionD: ['South Dakota', true]
    },
    {

      question: 'What was the name of the U.S. mail service, started in 1860, that used horses and riders?',
      optionA: ['Rapid Riders', false],
      optionB: ['Pony Express', true],
      optionC: ['Hold your Horses!', false],
      optionD: ['Mail delivery Inc.', false]
    },
    {

      question: 'Who assassinated President Abraham Lincoln?',
      optionA: ['John Wilkes Booth', true],
      optionB: ['Henk', false],
      optionC: ['Harry Truman Smith', false],
      optionD: ['Eddie Redmayne', false]
    },
    {

      question: 'What is Fergie\'s real name?',
      optionA: ['Lisa Ferguson', false],
      optionB: ['Charlene Ferguson', false],
      optionC: ['Felicia Ferguson', false],
      optionD: ['Stacie Ann Ferguson', true]
    }
];

// Seed the user and recipe!
const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());


        questions.map((question) => {
          feathersClient.service('questions').create(question)
            .then((result) => {
              console.log('questions seeded...', result.title);
            }).catch((error) => {
              console.error('Error seeding questions!', error.message);
            });
        });
