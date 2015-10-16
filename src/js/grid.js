var Grid = function() {
    this.elements = [];
    this.addElements = [];

    this.width = 0; document.offsetWidth / this.pxStep;
    this.height = 0; document.offsetHeight / this.pxStep;

    this.addElement = function(gridElement, x, y) {
        gridElement.x = x;
        gridElement.y = y;
        gridElement.grid = this;
        //gridElement.updateSize();

        //this.drawElement(gridElement);
        this.addElements.push(gridElement);
    }

    /*
    this.drawElement = function(gridElement) {
        gridElement.document.style.left = this.pxStep * gridElement.x;
        gridElement.document.style.top = this.pxStep * gridElement.y;
    }
*/

    this.isSideHit = function (size, otherSize) {
        return utils.isCoverRange(size.begin, size.end, otherSize.begin, otherSize.end)
    }
}