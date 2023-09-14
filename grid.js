const body = document.querySelector('body');

let dimension = null;
function getValue() {
    dimension = prompt("please enter a value");
    container.innerHTML = '';
    createDivs();
}

function pickColor () {
    const colors = [ '#ff0000', '#00ff00', '#0000ff',
    '#ff3333', '#ffff00', '#ff6600', '#ff00ff','#ffff00' ];
    var random_color = colors[(Math.floor(Math.random() * colors.length))];
    return random_color;
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
        
    for (let i = 0; i < dimension ; i++) {
        const div = document.createElement('div');
        div.classList.add('row');
        
        
        for (let j = 0; j < dimension; j++) {
            const inDiv = document.createElement('div');
            const size = 1000 / dimension;
            inDiv.classList.add('in-row');
            inDiv.style.width = `${size}px`;
            inDiv.style.height = `${size}px`;
            inDiv.addEventListener('mouseenter', () => {
                inDiv.style.backgroundColor = pickColor();
            });
            
            div.appendChild(inDiv);
       }
       
    container.appendChild(div);

    }
 }

body.appendChild(container);
