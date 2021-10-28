import quests from './Data/Quest-data.js';

export function generateUser(formData) {
    return {
        completed: {},
        character: formData.get('character'),
        name: formData.get('name'),
        hp: 100,
        currency: 50,
    };
}

export function setUser(newUser) {
    const userString = JSON.stringify(newUser);
    localStorage.setItem('USER', userString);
}

export function getUser() {
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function findById(items, id) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function scoreQuest(choice, data, user) {
    user.hp += choice.hp;
    user.currency += choice.currency;
    user.completed[data] = true;
}

export function loadProfile() {
    const user = getUser();
    console.log(user);

    const name = document.getElementById('user-name');
    name.textContent = user.name;

    const image = document.getElementById('user-image');
    image.src = `../assets/${user.character}.jpg`;

    const currency = document.getElementById('user-currency');
    currency.textContent = user.currency;

    const hp = document.getElementById('user-hp');
    hp.textContent = user.hp;
}

export function hasCompletedAllQuests(user) {
    for (let quest of quests) {
        if (!user.completed[quest.id]){
            return false;
        } 
    }
    return true;
}

export function isDead(user) {
    return user.hp <= 0;
}