import utils from '../utils.js';
import GridElement from '../grid/gridElement.js';

class Well extends GridElement {
    constructor() {
        super();
        var wall = document.createElement('div');
        wall.className = 'wall grid-element';
        GridElement.call(this, wall);

        this.height = 10;
        this.width = 10;
    }
}

utils.extend(Well, GridElement.behavior.hitable);

export default Well;