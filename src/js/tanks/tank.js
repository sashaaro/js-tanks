import utils from '../utils.js';
import GridElement from '../grid/gridElement.js';

class Tank extends GridElement {
    constructor() {
        super();
        var tank = document.createElement('div');
        tank.className = 'tank grid-element';
        GridElement.call(this, tank);

        this.height = 10;
        this.width = 10;
    }
}


utils.extend(Tank, GridElement.behavior.hitable);
utils.extend(Tank, GridElement.behavior.movable);
utils.extend(Tank, GridElement.behavior.rotatable);

export default Tank;