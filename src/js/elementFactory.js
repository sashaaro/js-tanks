var ElementFactory = function() {
    this.createTank = function() {
        var tank = document.createElement('div');
        tank.className = 'tank grid-element';
        gridDocument.appendChild(tank);
        var element =  new GridElement(tank);
        //element = new Tank(element);
        return element;
    },
    this.createWell = function() {
        var wall = document.createElement('div');
        wall.className = 'wall grid-element';
        gridDocument.appendChild(wall);
        return new GridElement(wall);
    }
}
