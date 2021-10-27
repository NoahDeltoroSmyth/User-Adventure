import quests from '../Data/Quest-data.js';
import { findById, getUser, setUser, scoreQuest, loadProfile } from '../Utils.js';

const params = new URLSearchParams(window.location.search);

const data = findById(quests, params.get('id'));
console.log(data, 'data');

const title = document.getElementById('title');
title.textContent = data.title;

const image = document.getElementById('img');
image.src = data.image;

const description = document.getElementById('quest-description');
description.textContent = data.description;

const choices = document.getElementById('choices');
for (let choice of data.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;
    //console.log(choice.id);

    const span = document.createElement('span');
    span.textContent = choice.description;
    
    label.append(input, span);
    choices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose';
choices.append(button);

choices.addEventListener('submit', (e)=> {
    e.preventDefault();

    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    console.log(selectedRadio, 'selectedradio');

    const choice = findById(data.choices, selectedRadio.value);
    console.log(choice, 'choice');

    const user = getUser();
    console.log(user, 'getuser');

    scoreQuest(choice, data.id, user);
    console.log(choice, data, user, 'scorequest');
    
    setUser(user);
    console.log(user, 'setuser');

    const questDescription = document.getElementById('quest-description');
    questDescription.classList.add('hidden');

    const questResults = document.getElementById('results');

    const resultP = document.createElement('p');
    resultP.textContent = choice.result;

    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Back to the Map!';

    questResults.append(resultP, backLink);

    questResults.classList.remove('hidden');

    loadProfile();
});

loadProfile();