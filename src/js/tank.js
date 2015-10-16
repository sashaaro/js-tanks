var Tank = function () {
    var tank = document.createElement('div');
    tank.className = 'tank grid-element';
    gridDocument.appendChild(tank);
    GridElement.call(this, tank);
};
Tank.prototype = Object.create(GridElement.prototype);
Tank.prototype.constructor = Tank;