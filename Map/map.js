import quests from '../Data/Quest-data.js';
import { getUser, loadProfile, hasCompletedAllQuests, isDead } from '../Utils.js';

const questLinks = document.getElementById('quest-links');

const user = getUser();

loadProfile();

if (hasCompletedAllQuests(user)){
    window.location.replace('../win');
}

if (isDead(user)){
    window.location.replace('../Gameover');
}

function displayLink(quest) {
    const a = document.createElement('a');
    a.href = `../Quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    questLinks.appendChild(a);
}

function displaySpan(quest) {
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('quest');
    questLinks.appendChild(span);
}
for (let quest of quests){
    // if user has completed the quest
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}