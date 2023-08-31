const body = document.querySelector('body');

let dimension = 0
function getValue() {
    dimension = prompt("please enter a value");
    container.innerHTML = '';
    createDivs();
}

const input = document.createElement('button');
body.appendChild(input);
input.classList.add('input');
input.textContent = `Enter Value`;
input.addEventListener('click', getValue);


const container = document.createElement('div');
container.setAttribute('id', 'container');

function createDivs() {
    if (isNaN(dimension) || dimension <= 0 || dimension > 100) {
        alert('please enter a number that is not less than one ore greater than 100');
        return;
    }
    let rows = dimension;
    let cols = dimension;

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement('div');
        const mouseTrail = document.createElement('div');
        mouseTrail.classList.add('mouse-trail');
        div.appendChild(mouseTrail);

        let cellSizePercentage = (100 / dimension) - ( 2 *(dimension - 1) / dimension); // Calculate cell size dynamically
        div.style.flex = `0 0 calc(${cellSizePercentage}% - 2px)`;

        div.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            const rect = container.getBoundingClientRect();

            const x = clientX - rect.left;
            const y = clientY - rect.top;

            mouseTrail.style.left = `${x}px`;
            mouseTrail.style.top = `${y}px`;
            mouseTrail.style.opacity = 1;
        });

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'grey';
        });

        div.addEventListener('mouseout', () => {
            div.style.backgroundColor = '';
            mouseTrail.style.opacity = 0;
        });

        container.appendChild(div);
    }
}

body.appendChild(container);
