// const btn = document.querySelector('#test');

// function test() {
//     btn.innerHTML = "";
//     btn.style.display = "none";
// }

// // BUTTONS
// btn.addEventListener('click', () => {  
// });

const GRID_SIZE = 16;
const container = document.querySelector('.container'); // grid wrap
const grid = document.createElement('div');             // fullgrid 
const grid_css = `  display: flex; 
                    flex-direction: column;
                    flex: 1;`;
grid.classList.add('grid');
grid.style.cssText = grid_css;

for(let i = 0; i < GRID_SIZE; ++i)
{
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.display = "flex";
    row.style.flex = "1";

    for(let j = 0; j < GRID_SIZE; ++j)
    {
        const col = document.createElement('div');
        col.classList.add('col');
        col.style.flex = "1";
        col.style.backgroundColor = "#ccc";
        col.style.minHeight = "10px";
        col.style.minWidth = "10px";
        row.appendChild(col);
    }
    grid.appendChild(row);
}
//const col2 = col.cloneNode(true);

container.appendChild(grid);

// Colour onClick test
grid.addEventListener('click', (e) => {
    // check if grid clicked is uncoloured
    if (e.target.matches('.col')) {
        e.target.style.background = "black";
    }
});