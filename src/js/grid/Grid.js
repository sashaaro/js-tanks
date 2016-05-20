import utils from '../utils.js';
import GridElement from './GridElement.js';

/**
 * HTML Grid
 */
class Grid {
    constructor(width, height) {
        this.elements = [];
        this.addElements = [];
        this.removeElements = [];

        this.width = width;
        this.height = height;

        this.document = null;
    }
    addElement(gridElement) {
        gridElement.grid = this;
        this.addElements.push(gridElement);
    }
    isSideHit(size, otherSize) { //TODO move to utils
        return utils.isCoverRange(size.begin, size.end, otherSize.begin, otherSize.end);
    }
}

export default Grid;