import utils from '../utils.js';
import GridElement from '../grid/GridElement.js';

class Tank extends GridElement {
    constructor() {
        var tank = document.createElement('div');
        tank.className = 'tank grid-element';
        super(tank);

        this.height = 10;
        this.width = 10;
    }
}


utils.extend(Tank, GridElement.behavior.hitable);
utils.extend(Tank, GridElement.behavior.movable);
utils.extend(Tank, GridElement.behavior.rotatable);

export default Tank;