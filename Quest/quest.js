import quests from '../Data/Quest-data.js';
import { findById } from '../Utils.js';

const params = new URLSearchParams(window.location.search);

const data = findById(quests, params.get('id'));

const title = document.getElementById('title');
title.textContent = data.title;

const image = document.getElementById('img');
image.src = data.image;

const description = document.getElementById('description');
description.textContent = data.description;

const choices = document.getElementById('choices');
for (let choice of data.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    
    label.append(input, span);
    choices.append(label);
}