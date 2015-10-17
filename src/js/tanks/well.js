var Well = function () {
    var wall = document.createElement('div');
    wall.className = 'wall grid-element';
    GridElement.call(this, wall);

    this.height = 10;
    this.width = 10;
};
Well.prototype = Object.create(GridElement.prototype);
Well.prototype.constructor = Well;

utils.extend(Well, GridElement.behavior.hitable);