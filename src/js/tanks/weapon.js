import utils from '../utils.js';
import Bullet from './bullet.js';
import GridElement from '../grid/gridElement.js';

var Weapon = function() {
    var weapon = document.createElement('div');
    weapon.className = 'weapon grid-element';
    GridElement.call(this, weapon);

    this.height = 5;
    this.width = 8;
    this.x = 1.2;

    this.bullet = null;
};
Weapon.prototype = Object.create(GridElement.prototype);
Weapon.prototype.constructor = Weapon;

GridElement.behavior.fireable = {
    bullet: null,
    fire: function() {
        this.bullet = new Bullet();
        this.bullet.nextMoveDirection = this.grid.nextMoveDirection;
        this.bullet.moveStatus = true;
        utils.extend(this.bullet, GridElement.behavior.rotatable);
        this.bullet.rotatePercent = this.grid.rotatePercent - 25;//todo remove

        this.bullet.x = this.grid.x + 10;
        this.bullet.y = this.grid.y + 10;

        this.grid.addElement(this.bullet);
    }
}

utils.extend(Weapon, GridElement.behavior.fireable);

export default Weapon;