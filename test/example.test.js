// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateUser, setUser, getUser, findById } from '../Utils.js';
import quests from '../Data/Quest-data.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('generateUser should generate a new user', (expect) => {
    const expected = {
        completed: {},
        currency: 50,
        hp: 100,
        name: 'Noah',
        character: 'Butthead',
    };

    const formData = new FormData();
    formData.set('name', 'Noah');
    formData.set('character', 'Butthead');

    const actual = generateUser(formData);

    expect.deepEqual(actual, expected);
});

test('setUser should set newuser into LS', (expect) => {
    localStorage.removeItem('USER');
    
    const newUser = {
        completed: {},
        currency: 50,
        hp: 100,
        name: 'Noah',
        character: 'Butthead'
    };

    setUser(newUser);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, newUser);
});

test('getUser should get info from LS', (expect) => {
    localStorage.removeItem('USER');

    const newUser = {
        completed: {},
        currency: 50,
        hp: 100,
        name: 'Noah',
        character: 'Butthead'
    };

    setUser(newUser);

    const actual = getUser();

    expect.deepEqual(actual, newUser);
});

test('findById should locate id', (expect) => {
    // localStorage.removeItem('USER');

    const expected = {
        id: 'convenience-store',
        title: 'Loitering at the store',
        image: '../assets/convenience-store-quest.jpeg',
        description: `
        There you are chillin' outside the convenience store and Todd shows up in his car. 
        He sees you eating some nachos and orders you to give them to him or he will beat you up. 
        What do you do?`,
        choices: [{
            id: 'give-in',
            description: 'Give the nachos to Todd',
            result: `
            Todd throws them on the ground because he didn't even want them in the first place. 
            He also still ends up beating you up and peels out on the nachos leaving you in a big plume of smoke.`,
            hp: -40,
            currency: -5
        }, {
            id: 'fight-back',
            description: 'Attempt to fight Todd',
            result: `
            Todd is much stronger than you and easily blocks your attack. He squashes your nachos, throws an insult
            and speeds away.`,
            hp: -20,
            currency: -5
        }, {
            id: 'get-his-own',
            description: 'Tell him to get his own nachos',
            result: `
            Todd doesn't like to be told what to do as you should know. He swipes your nachos and eats them all.
            He calls you a loser and says he will see you later so he can steal your nachos again.`,
            hp: -15,
            currency: -5
        }]
    };

    const actual = findById(quests, 'convenience-store');

    expect.deepEqual(actual, expected);

});