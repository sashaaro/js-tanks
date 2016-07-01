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
}

export default Grid;