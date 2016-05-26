import utils from '../utils.js';
import GridElement from '../grid/GridElement.js';

class Bullet extends GridElement {
    constructor() {
        var bullet = document.createElement('div');
        bullet.className = 'bullet grid-element';
        super(bullet);

        this.height = 4;
        this.width = 4;
    }
    hitTrigger (element) {
        this.grid.removeElements.push(this);
        if (!element.strong) {
            this.grid.removeElements.push(element);
        }
    }
}

utils.extend(Bullet, GridElement.behavior.movable);
utils.extend(Bullet, GridElement.behavior.hitable);

export default Bullet;