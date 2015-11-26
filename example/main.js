var grid = new Grid(150, 150);
grid.document = document.getElementById('grid');

var border = new Well();
border.x = grid.width - 10;
grid.addElement(border);
border.height = grid.height;

border = new Well();
grid.addElement(border, 0, 0);
border.height = grid.width;

border = new Well();
grid.addElement(border, 0, 0);
border.width = grid.width;

border = new Well();
border.y = grid.height-10;
grid.addElement(border);
border.width = grid.width;

border = new Well();
border.x = 20;
border.y = 130;
grid.addElement(border);

border = new Well();
border.x = 20;
border.y = 120;
grid.addElement(border);

border = new Well();
border.x = 20;
border.y = 110;
grid.addElement(border);

border = new Well();
border.x = 30;
border.y = 110;
grid.addElement(border);
border = new Well();
border.x = 40;
border.y = 110;
grid.addElement(border);


border = new Well();
border.x = 130;
border.y = 120;
grid.addElement(border);
border.document.className = 'steel grid-element'; //move to out
border = new Well();
border.x = 120;
border.y = 120;
grid.addElement(border);
border.document.className = 'steel grid-element'; //move to out



var myTank = new Tank();
utils.extend(myTank, GridElement.behavior.embedable);

var weapon = new Weapon();
myTank.addElement(weapon);

myTank.x = 10;
myTank.y = 130;
myTank.nextMoveDirection = 'up';
grid.addElement(myTank);
//myTank.moveSpeed = 3;

var enemyTank = new Tank();
enemyTank.x = 100;
enemyTank.y = 100;
grid.addElement(enemyTank);

var gridControl = new GridElementControl();

gridControl.take(myTank);
gridControl.computer(enemyTank);


var gridDocument = document.getElementById('grid');
var render = new HtmlRender(grid, gridDocument, 4);
var game = new Game(grid, render);
game.run(70);