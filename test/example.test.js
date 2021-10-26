// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateUser, setUser } from '../Utils.js';
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