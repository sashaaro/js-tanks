var Tank = function () {
    var tank = document.createElement('div');
    tank.className = 'tank grid-element';
    GridElement.call(this, tank);

    this.height = 10;
    this.width = 10;
};
Tank.prototype = Object.create(GridElement.prototype);
Tank.prototype.constructor = Tank;

utils.extend(Tank, GridElement.behavior.movable);
utils.extend(Tank, GridElement.behavior.rotatable);