var grid = new Grid(150, 150);
grid.document = document.getElementById('grid');

var oneLevel = new OneLevel(grid);
oneLevel.init();

var gridDocument = document.getElementById('grid');
var render = new HtmlRender(grid, gridDocument, 4);
var game = new Game(grid, render);
game.timeHandlers.push(oneLevel);
game.run(70);