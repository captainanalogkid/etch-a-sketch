const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    const boxContainer = document.createElement('div');
    boxContainer.className = 'box';
    container.appendChild(boxContainer);
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
        event.target.style.backgroundColor = 'rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})';
        event.target.classList.add('trail');
    }
});

container.addEventListener('click', () => {
    container.querySelectorAll('.trail').forEach((box) => {
        box.style.backgroundColor = 'pink';
        box.classList.remove('.trail');
    });
});

