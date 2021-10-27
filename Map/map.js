import quests from '../Data/Quest-data.js';
import { getUser, loadProfile, hasCompletedAllQuests } from '../Utils.js';

const questLinks = document.getElementById('quest-links');

const user = getUser();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../Gameover');
}













for (let quest of quests) {
    const a = document.createElement('a');
    a.href = `../Quest/?id=${quest.id}`;
    a.textContent = quest.title;
    questLinks.appendChild(a);
}

loadProfile();