import utils from '../utils.js';
import GridElement from '../grid/GridElement.js';

class Well extends GridElement {
    constructor() {
        var wall = document.createElement('div');
        wall.className = 'wall grid-element';
        super(wall);

        this.height = 10;
        this.width = 10;
    }
}

utils.extend(Well, GridElement.behavior.hitable);

export default Well;