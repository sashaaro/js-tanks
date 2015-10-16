var Grid = function(document, pxStep) {
    this.pxStep = pxStep || 2;
    this.elements = [];
    this.width = document.offsetWidth / this.pxStep;
    this.height = document.offsetHeight / this.pxStep;


    this.addElement = function(gridElement, x, y) {
        gridElement.x = x;
        gridElement.y = y;
        gridElement.grid = this;
        gridElement.updateSize();

        this.drawElement(gridElement);
        this.elements.push(gridElement);
    }

    this.drawElement = function(gridElement) {
        gridElement.document.style.left = this.pxStep * gridElement.x;
        gridElement.document.style.top = this.pxStep * gridElement.y;
    }

    this.isSideHit = function (size, otherSize) {
        return utils.isCoverRange(size.begin, size.end, otherSize.begin, otherSize.end)
    }
}