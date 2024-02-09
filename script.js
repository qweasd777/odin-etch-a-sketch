const GRID_SIZE_ORIGIN = 16;
const container = document.querySelector('.container'); // grid wrap
const grid = document.createElement('div');             // fullgrid 
const grid_css = `  display: flex; 
                    flex-direction: column;
                    flex: 1;`;
grid.classList.add('grid');
grid.style.cssText = grid_css;
const gridSizeText = document.querySelector("#gridsizeText");
gridSizeText.innerHTML = GRID_SIZE_ORIGIN;

const Brush = {
	normal: "normal",
	eraser: "eraser",
	shader: "shader",
	rgb: "rgb"
}

const BrushColour = {
	normal: "#333",
	eraser: "#fff"
}

let gridSize = GRID_SIZE_ORIGIN;
let brushType = Brush.normal;

// ---------- BUTTONS ----------
const btnAll_brushes = document.querySelectorAll('.brushType');
const btn_clear = document.querySelector('#setClear');
const slider = document.querySelector(".slider");
slider.value = GRID_SIZE_ORIGIN;    // slider init value
// ---------- BUTTONS ----------

function gridInit() {
    // Reset grid
    grid.innerHTML = "";

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
            col.style.backgroundColor = BrushColour.eraser;
            //col.style.minHeight = "10px";
            //col.style.minWidth = "10px";
            col.draggable = false;
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
}

function randomHSL() {
    // function to return only bright rgb colors
    // by kigiri (https://stackoverflow.com/questions/1484506/random-color-generator)
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

function colourGridBox(event) {
    let box = event.target;

    // Colour box according to current brushType
    switch(brushType)
    {
        case Brush.normal:
            box.style.backgroundColor = BrushColour.normal;
            break;

        case Brush.eraser:
            box.style.backgroundColor = BrushColour.eraser;
            break;

        case Brush.shader:
            //const title = document.querySelector(".title");
            //title.innerHTML = box.style.getAttribute();
            //box.style.filter = "brightness(0.5)";
            
            break;

        case Brush.rgb:
            box.style.backgroundColor = randomHSL();
            break;

        default:
            alert("undefined brushType");
    }
}

gridInit();

// ---------- MOUSE EVENTS ---------- 
grid.addEventListener('mousedown', (e) => {
    colourGridBox(e);
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
btnAll_brushes.forEach((btn_brush) => {
    // for each brush btn we add a 'click' listener
    btn_brush.addEventListener('click', (e) => {
        brushType = btn_brush.id;
    });
});

btn_clear.addEventListener('click', () => {      
    gridInit();
});

// SLIDER UPDATE
slider.onchange = function() {
    gridSize = this.value;
    
    gridInit();     
}
slider.oninput = function() {
    // Update gridSize info display
    gridSizeText.innerHTML = this.value;
}
// ---------- BUTTON EVENTS ---------- 
