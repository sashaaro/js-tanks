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
utils.extend(Weapon, GridElement.behavior.fireable);