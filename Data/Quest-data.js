const convenienceStore = {
    id: 'convenience-store',
    title: 'Loitering at the store',
    image: '',
    description: `
        There you are chillin outside the convenience store and Todd shows up in his car. 
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

const burgerWorld = {
    id: 'burger-world',
    title: 'Burger World',
    image: '',
    description: `
        You get a call from your manager and he says that they are slammed and need extra help on the floor.
        He asks if you can come in right now for an extra 10 dollars and a free meal, but this means you would have
        to stop watching TV and leave the house. What do you do?`,
    choices: [{
        id: 'go-in',
        description: 'Go into work',
        result: `
            You go into work, but you quickly realize it was never worth it to begin with. The customers are rude
            and you don't care to be there at all. You also were never given the extra 10 dollars and instead of a meal
            you received a gift card to a book store with 1 dollar on it.`,
        hp: -10,
        currency: -10
    }, {
        id: 'stay-home',
        description: 'Stay at home and watch TV',
        result: `
            This is the best choice you could have made. Not only do you not have to work you get to sit at home and
            watch TV.`,
        hp: 25,
        currency: 0
    }, {
        id: 'have-beavis-go-in',
        description: 'Have Beavis go in for you',
        result: `
            Tell Beavis the manager asked for him specifically. This way you can stay at home and watch TV.`,
        hp: 30,
        currency: 0
    }]
};

const school = {
    id: 'school',
    title: 'School Day',
    image: '',
    description: `
        You are at school, but you hate that you have to be there. You envision a plan to get out of there, but principal McVicker
        is guarding the front doors. What should you do?`,
    choices: [{
        id: 'run-past',
        description: 'Run past principal McVicker',
        result: `
            You attempt to run past him, but he surprisingly has laser like reflexes and catches you. In his voice, he says
            you have to go to detention.`,
        hp: -20,
        currency: -5
    }, {
        id: 'stay-at-school',
        description: 'Stay at school',
        result: `
            Deciding it's not worth it to attempt to leave, you stay at school and feel the pain of sitting through history class.
            Nothing cool is ever talked about and it's a big bummer.`,
        hp: -15,
        currency: 0
    }, {
        id: 'make-alternate-plan',
        description: 'Make an alternative plan',
        result: `
            You envision a plan to get out the back doors. Only thing is Van Driessen is in the hall and it might be difficult to get by.
            Lucky for you he isn't really paying attention and you are able to get out of school and find some money on the way.`,
        hp: 25,
        currency: 15
    }]
};

const quests = [
    convenienceStore,
    burgerWorld,
    school,
];

export default quests;