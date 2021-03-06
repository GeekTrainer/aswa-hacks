const dogs = []

main();

async function main() {
    await loadDogs();
    displayDogs();
}

async function loadDogs() {
    const response = await fetch('/api/dogs');
    const json = await response.json();

    for (let dog of json.dogs) {
        dogs.push(dog);
    }
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