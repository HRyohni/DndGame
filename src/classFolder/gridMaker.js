// private variables
let arrayGrid;
let gridWidth;
let gridHeight;

// make simple empty grid and returns it
function makeGrid(gridX, gridY) {
    gridWidth = gridX;
    gridHeight= gridY;
    arrayGrid = new Array(gridX).fill(new Array(gridY).fill("empty"))
    return arrayGrid;
}

function checkGrid(gridX, gridY) {
    if (arrayGrid[gridX][gridY] === "empty")
        return gridX + "x , " + gridY + "Y : is empty"
}

function getGrid(gridX, gridY) {
    return arrayGrid[gridX][gridY]
}

function setGrid(gridX, gridY,value) {
    arrayGrid[gridX][gridY] = value;
}

function getGridWidth()
{
    return gridWidth;
}
function getGridHeight()
{
    return gridHeight;
}

export default {
    makeGrid,
    checkGrid,
    getGrid,
    setGrid,
    getGridWidth,
    getGridHeight,
}
