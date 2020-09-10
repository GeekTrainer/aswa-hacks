const dogs = [
    { name: 'Sammy' },
    { name: 'Roscoe' },
    { name: 'Pookie' },
    { name: 'Butch' },
    { name: 'Princess' },
    { name: 'Artichoke' }
]

main();

function main() {
    displayDogs();
}

function displayDogs() {
    for (let dog of dogs) {
        addDogToUI(dog);
    }
}

function addDogToUI(dog) {
    const dogUI = document.createElement('a');
    dogUI.className = 'list-group-item'; //bootstrap
    dogUI.innerText = dog.name;

    const dogListUI = document.getElementById('dog-list');
    dogListUI.appendChild(dogUI);
}