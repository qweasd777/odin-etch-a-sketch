const GRID_SIZE_ORIGIN = 16;
const container = document.querySelector('.container'); // grid wrap
const grid = document.createElement('div');             // fullgrid 
const grid_css = `  display: flex; 
                    flex-direction: column;
                    flex: 1;`;
grid.classList.add('grid');
grid.style.cssText = grid_css;

// ---------- BUTTONS ----------
const btn_clear = document.querySelector('#setClear');
// ---------- BUTTONS ----------

let gridSize = GRID_SIZE_ORIGIN;
let brushActive = false;

function gridInit() {
    for(let i = 0; i < gridSize; ++i)
    {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = "flex";
        row.style.flex = "1";

        for(let j = 0; j < gridSize; ++j)
        {
            const col = document.createElement('div');
            col.classList.add('col');
            col.style.flex = "1";
            col.style.backgroundColor = "#fff";
            col.style.minHeight = "10px";
            col.style.minWidth = "10px";
            col.draggable = false;
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
}

const colourGridBox = (e) => {
    let box = e.target;

    // CURRENT COLOUR CHOICE
    box.style.background = "#333";
};

gridInit();

// ---------- MOUSE EVENTS ---------- 
grid.addEventListener('mousedown', (e) => {
    e.target.style.background = "#333";
    // Add listener to gridContainer on mousedown
    grid.addEventListener('mouseover', colourGridBox);
});
window.addEventListener('mouseup', () => {
    // Remove listener from gridContainer on mousedown
    grid.removeEventListener('mouseover', colourGridBox);
});

// Drag & drop prevention on gridContainer
grid.addEventListener('dragstart', (e) => {
    e.preventDefault();
});
grid.addEventListener('drop', (e) => {
    e.preventDefault();
});
// ---------- MOUSE EVENTS ---------- 
// ---------- BUTTON EVENTS ---------- 
btn_clear.addEventListener('click', () => {      
    const boxes = document.querySelectorAll('.col');

    // Reset BG colour to white
    boxes.forEach(box => {
        box.style.backgroundColor = "#fff";
    });
});
// ---------- BUTTON EVENTS ---------- 
