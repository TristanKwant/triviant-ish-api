// src/seeds.js
/* eslint-disable no-console */
const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
 const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

// const user = {
//   name: 'Jamie Gulliver',
//   email: 'jamie@gulliver.dev',
//   password: 'abcd1234'
// };

const questions = [
    {
      _id: 'question2',
      question: 'Who won world cup 2002?',
      optionA: ["Brazil", true],
      optionB: ["France", false],
      optionC: ["Italy", false],
      optionD: ["Germany", false]
    },
    {
      _id: 'question3',
      question: 'Another test?',
      optionA: ["Hello", true],
      optionB: ["Welcom", false],
      optionC: ["No", false],
      optionD: ["Go awya", false]
    }
];

// Seed the user and recipe!
const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  // .configure(auth());


        questions.map((question) => {
          feathersClient.service('questions').create(question)
            .then((result) => {
              console.log('questions seeded...', result.title);
            }).catch((error) => {
              console.error('Error seeding questions!', error.message);
            });
        });
