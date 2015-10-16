var grid = new Grid(150, 150);

grid.document = document.getElementById('grid');
var gridControl = new GridElementControl();
var ef = new ElementFactory();


/*grid.addElement(ef.createWell(), 0, 40);
grid.addElement(ef.createWell(), 10, 40);
grid.addElement(ef.createWell(), 20, 40);
grid.addElement(ef.createWell(), 30, 40);
grid.addElement(ef.createWell(), 40, 40);
grid.addElement(ef.createWell(), 50, 40);*/

var border = ef.createWell();
grid.addElement(border, grid.width - 10, 0);
border.height = grid.height;

var border = ef.createWell();
grid.addElement(border, 0, 0);
border.height = grid.width;

var border = ef.createWell();
grid.addElement(border, 0, 0);
border.width = grid.width;

var border = ef.createWell();
grid.addElement(border, 0, grid.height-10);
border.width = grid.width;


var myTank = ef.createTank();
grid.addElement(myTank, 10, 10);
gridControl.take(myTank);
utils.extend(myTank, GridElement.behavior.movable);
//myTank.moveSpeed = 3;

var enemyTank = ef.createTank();
grid.addElement(enemyTank, 100, 100);
utils.extend(enemyTank, GridElement.behavior.movable);
gridControl.computer(enemyTank);

var gridDocument = document.getElementById('grid');
var render = new Render(grid, gridDocument, 4);
var game = new Game(grid, render);
game.run(70);