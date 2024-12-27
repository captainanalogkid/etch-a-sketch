const container = document.getElementById('container');
const numberButton = document.getElementById('numberButton');

function createBoxes(count) {
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const boxContainer = document.createElement('div');
        boxContainer.className = 'box';
        container.appendChild(boxContainer);
    }
}

container.addEventListener('mouseover', (event) => {
    
    if (event.target.classList.contains('box')) {
        event.target.style.backgroundColor = 'pink';
    }
});

container.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('box') && !event.target.classList.contains('trail')) {
        event.target.style.backgroundColor = 'lightblue';
    }
});

container.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('box')) {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        event.target.style.backgroundColor = randomColor;
        event.target.classList.add('trail');
    }
});

container.addEventListener('click', () => {
    container.querySelectorAll('.trail').forEach((box) => {
        box.style.backgroundColor = 'lightBlue';
        box.classList.remove('.trail');
    });
});

numberButton.addEventListener('click', () => {
    const newSquares = parseInt(document.getElementById('numberInput').value, 10);
    if (!isNaN(newSquares) && newSquares > 0 && newSquares <= 99) {
        createBoxes(newSquares);
    }
    else {
        alert('Please Enter a number between 1 and 99.');
    }
});

document.getElementById('numberInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        numberButton.click();
    }
});

createBoxes(16);

