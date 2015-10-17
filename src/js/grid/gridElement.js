var GridElement = function(document) {
    this.document = document;
    this.grid = null;
    this.x = null;
    this.y = null;
    this.width = 0;
    this.height = 0;
}

GridElement.prototype.getVerticalSize = function() {
    return {
        begin: this.y,
        end: this.y + this.height
    };
}
GridElement.prototype.getHorizontalSize = function() {
    return {
        begin: this.x,
        end: this.x + this.width
    };
}

GridElement.behavior = {};