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