import { generateUser, setUser } from './Utils.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e)=> {
    
    e.preventDefault();

    const formData = new FormData(userForm);

    const newUser = generateUser(formData);

    setUser(newUser);

    window.location.replace('../Map');
});