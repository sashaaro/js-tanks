import utils from '../utils.js';
import GridElement from '../grid/GridElement.js';
import HtmlRender from '../grid/HtmlRender.js';
import Game from '../grid/Game.js';
import TimeHandler from '../grid/TimeHandler.js';

/**
 * Default TimeHandler
 */
class ReRenderTimeHandler extends TimeHandler {
    time() {
        var elements = this.game.grid.elements;
        for(var prop in elements) {
            var element = elements[prop];
            if((utils.hasBehaviour(element, GridElement.behavior.movable))) {
                element.move();
            }
        }

        for(var prop in elements) {
            var element = elements[prop];
            if(element.elements) {
                var render = new HtmlRender(element, element.document, this.game.render.pxStep);
                var g = new Game(element, render);
                render.drawElement(g.grid);
                g.time();
                g.render.reDraw();
            }
        }
    }
    drawElement(gridElement) {
        if(utils.hasBehaviour(gridElement, GridElement.behavior.rotatable)) {
            gridElement.document.style.webkitTransform = 'rotate(' + (gridElement.rotatePercent / 100) + 'turn)';
        }

        if(utils.hasBehaviour(gridElement, GridElement.behavior.embedable)) {
            var render = new HtmlRender(gridElement, gridElement.document, this.game.pxStep);
            render.parent = this.game;
            render.reDraw();
        }

        if(utils.hasBehaviour(gridElement, GridElement.behavior.fireable) && gridElement.bullet) {
            gridElement.bullet.x = gridElement.grid.x;
            gridElement.bullet.y = gridElement.grid.y;
            this.game.grid.grid.addElement(gridElement.bullet);
            gridElement.bullet = null;
        }
    }
}

export default ReRenderTimeHandler;