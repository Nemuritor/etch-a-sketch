// Define container at the top level of your script
const container = document.querySelector(".container");

document.getElementById('changeSizeButton').addEventListener('click', changeGridSize);

function changeGridSize() {
    let userInput = parseInt(prompt("Enter the number of squares per side for the new grid (max 100):", "16"), 10);
    if (!userInput || userInput <= 0 || userInput > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    createGrid(userInput);
}

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        // Add event listener to change background color on hover
        cell.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'blue';
        }, { once: true }); // Listener will be removed after the first trigger
        container.appendChild(cell);
    }
}


// Initial grid setup
createGrid(16); // Default size
