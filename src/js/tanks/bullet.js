import utils from '../utils.js';
import GridElement from '../grid/gridElement.js';

class Bullet extends GridElement {
    constructor() {
        super();
        var bullet = document.createElement('div');
        bullet.className = 'bullet grid-element';
        GridElement.call(this, bullet);

        this.height = 5;
        this.width = 8;
    }
    hitTrigger (element) {
        this.grid.removeElements.push(this);
        this.grid.removeElements.push(element);
    }
}

utils.extend(Bullet, GridElement.behavior.movable);
utils.extend(Bullet, GridElement.behavior.hitable);

export default Bullet;