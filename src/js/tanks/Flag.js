import utils from '../utils.js';
import GridElement from '../grid/GridElement.js';

class Flag extends GridElement {
    constructor() {
        var wall = document.createElement('div');
        wall.className = 'flag grid-element';
        super(wall);

        this.height = 10;
        this.width = 10;
    }
}

utils.extend(Flag, GridElement.behavior.hitable);

export default Flag;