import utils from '../utils.js';
import GridElement from './GridElement.js';

class HtmlRender {
    constructor(grid, document, pxStep) {
        this.grid = grid;
        this.document = document;
        this.pxStep = pxStep || 2;
        this.parent = null;
        this.drawElementHandler = [];
    }
    reDraw () {
        var elements = this.grid.elements;
        for(var key in this.grid.addElements) {
            var addGridElement = this.grid.addElements[key];
            this.drawElement(addGridElement);

            this.document.appendChild(addGridElement.document);
            elements.push(addGridElement);
        }
        this.grid.addElements = [];

        for(var key in elements) {
            var gridElement = elements[key];;
            if(this.grid.removeElements.indexOf(gridElement) === -1) {
                this.drawElement(gridElement);
            } else if(gridElement.document.parentNode) {
                gridElement.document.parentNode.removeChild(gridElement.document);
                //this.grid.document.removeChild(gridElement.document);
                delete elements[elements.indexOf(gridElement)] // todo move out
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

        this.drawElementHandler.forEach((handler) => {
            handler.drawElement(gridElement);
        });
    }
}

export default HtmlRender;