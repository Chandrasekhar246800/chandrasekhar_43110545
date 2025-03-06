let counter = 0;

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.innerText = counter;
}

function increment() {
    const counterPanel = document.querySelector('.counter-panel');
    counterPanel.classList.remove('hidden');
    counter++;
    updateCounter();
}

function decrement() {
    const counterPanel = document.querySelector('.counter-panel');
    counterPanel.classList.remove('hidden');
    counter--;
    updateCounter();
}
