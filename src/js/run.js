import Grid from './grid/grid.js';
import FirstLevel from './tanks/levels/FirstLevel.js';
import HtmlRender from './grid/HtmlRender.js';
import Game from './grid/Game.js';

var gridDocument = document.getElementById('grid');
var grid = new Grid(150, 150);
grid.document = gridDocument;

var render = new HtmlRender(grid, gridDocument, 4);
var game = new Game(grid, render);
var oneLevel = new FirstLevel(game);
oneLevel.init();
game.timeHandlers.push(oneLevel);
game.run(70);