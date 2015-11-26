var grid = new Grid(150, 150);
grid.document = document.getElementById('grid');

var oneLevel = new OneLevel(grid);
oneLevel.init();

var gridDocument = document.getElementById('grid');
var render = new HtmlRender(grid, gridDocument, 4);
var game = new Game(grid, render);
game.timeHandlers.push(oneLevel);
game.run(70);

//fun
/*grid.document.addEventListener('click', function(e) {
    var enemyTank = new Tank();
    enemyTank.x = e.clientX / render.pxStep;
    enemyTank.y = e.clientY / render.pxStep;
    grid.addElement(enemyTank);

    var gridControl = new GridElementControl();
    gridControl.computer(enemyTank);
});*/