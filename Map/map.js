import quests from '../Data/Quest-data.js';

const questLinks = document.getElementById('quest-links');

for (let quest of quests) {
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    questLinks.appendChild(a);
}
