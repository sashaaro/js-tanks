var Bullet = function() {
    var bullet = document.createElement('div');
    bullet.className = 'bullet grid-element';
    GridElement.call(this, bullet);

    this.height = 5;
    this.width = 8;
};
Bullet.prototype = Object.create(GridElement.prototype);
Bullet.prototype.constructor = Bullet;

utils.extend(Bullet, GridElement.behavior.movable);
utils.extend(Bullet, GridElement.behavior.hitable);

Bullet.prototype.hitTrigger = function(element)
{
    this.grid.removeElements.push(this);
    this.grid.removeElements.push(element);
}