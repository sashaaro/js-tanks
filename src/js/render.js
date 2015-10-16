var Render = function(grid, document, pxStep)
{
    this.grid = grid;
    this.document = document;
    this.pxStep = pxStep || 2;
}

Render.prototype.reDraw = function ()
{
    for(var key in this.grid.addElements) {
        var addGridElement = this.grid.addElements[key];
        this.drawElement(addGridElement);

        this.document.appendChild(addGridElement.document);
        this.grid.elements.push(addGridElement);
    }
    this.grid.addElements = [];

    for(var key in this.grid.elements) {
        var gridElement = this.grid.elements[key];
        this.drawElement(gridElement);
    }
}

Render.prototype.drawElement = function(gridElement) {
    gridElement.document.style.left = gridElement.x * this.pxStep;
    gridElement.document.style.top = gridElement.y * this.pxStep;

    gridElement.document.style.width = gridElement.width * this.pxStep;
    gridElement.document.style.height = gridElement.height * this.pxStep;
}