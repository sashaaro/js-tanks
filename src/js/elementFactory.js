var ElementFactory = function() {
    this.createTank = function() {
        return new Tank();
    },
    this.createWell = function() {
        var wall = document.createElement('div');
        wall.className = 'wall grid-element';
        gridDocument.appendChild(wall);
        return new GridElement(wall);
    }
}
