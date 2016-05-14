import utils from '../utils.js';
import GridElement from './gridElement.js';

class HtmlRender {
    constructor(grid, document, pxStep) {
        this.grid = grid;
        this.document = document;
        this.pxStep = pxStep || 2;
        this.parent = null;
    }
    reDraw () {
        for(var key in this.grid.addElements) {
            var addGridElement = this.grid.addElements[key];
            this.drawElement(addGridElement);

            this.document.appendChild(addGridElement.document);
            this.grid.elements.push(addGridElement);
        }
        this.grid.addElements = [];

        for(var key in this.grid.elements) {
            var gridElement = this.grid.elements[key];;
            if(this.grid.removeElements.indexOf(gridElement) === -1) {
                this.drawElement(gridElement);
            } else if(gridElement.document.parentNode) {
                gridElement.document.parentNode.removeChild(gridElement.document);
                //this.grid.document.removeChild(gridElement.document);
                delete this.grid.elements[this.grid.elements.indexOf(gridElement)] // todo move out
            }
        }

        this.grid.removeElements = [];
    }
    drawElement (gridElement) {
        //if(utils.hasBehaviour(gridElement, GridElement.behavior.movable)) {
        gridElement.document.style.left = gridElement.x * this.pxStep;
        gridElement.document.style.top = gridElement.y * this.pxStep;
        //}

        gridElement.document.style.width = gridElement.width * this.pxStep;
        gridElement.document.style.height = gridElement.height * this.pxStep;

        if(utils.hasBehaviour(gridElement, GridElement.behavior.rotatable)) {
            gridElement.document.style.webkitTransform = 'rotate(' + (gridElement.rotatePercent / 100) + 'turn)';
        }

        if(utils.hasBehaviour(gridElement, GridElement.behavior.embedable)) {
            var render = new HtmlRender(gridElement, gridElement.document, this.pxStep);
            render.parent = this;
            render.reDraw();
        }

        if(utils.hasBehaviour(gridElement, GridElement.behavior.fireable) && gridElement.bullet) { //todo move to
            gridElement.bullet.x = gridElement.grid.x;
            gridElement.bullet.y = gridElement.grid.y;
            this.grid.grid.addElement(gridElement.bullet);
            gridElement.bullet = null;
        }
    }
}

export default HtmlRender;