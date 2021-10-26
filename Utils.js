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