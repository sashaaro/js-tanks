import utils from '../utils.js';
import GridElement from '../grid/GridElement.js';
import HtmlRender from './HtmlRender.js';

class Game {
    constructor(grid, render) {
        this.grid = grid;
        this.render = render;
        this.timeHandlers = [];
        this.timeHandlers.push(new ReRenderTimeHandler());
        this.intervalID = null;
    }
    run(delay) {
        var that = this;
        this.render.drawElement(this.grid);
        this.intervalID = setInterval(function() {
            that.time();
            that.render.reDraw();
        }, delay);
    }
    over() {
        clearInterval(this.intervalID);
    }
    time() {
        var that = this;
        this.timeHandlers.forEach(function(handler){
            handler.time(that);
        })
    }
}

function ReRenderTimeHandler() {
    this.time = function(game) {
        for(var prop in game.grid.elements) {
            var element = game.grid.elements[prop];
            if((utils.hasBehaviour(element, GridElement.behavior.movable))) {
                element.move();
            }
            if(element.elements) {
                var render = new HtmlRender(element, element.document, game.render.pxStep);
                var g = new Game(element, render);
                render.drawElement(g.grid);
                g.time();
                g.render.reDraw();
            }
        }
    }
}

export default Game;