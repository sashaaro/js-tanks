var GridElement = function(document) {
    this.document = document;
    this.grid = null;
    this.x = null;
    this.y = null;
    this.width = null;
    this.height = null;
}

/*GridElement.prototype.updateSize = function(){
    this.width = this.document.offsetWidth / this.grid.pxStep;
    this.height = this.document.offsetHeight / this.grid.pxStep;
}*/
GridElement.prototype.getVerticalSize = function() {
    return {
        begin: this.y,
        end: this.y + this.height
    };
}
GridElement.prototype.setWidth = function(width)
{
    this.width = width;
    this.document.style.width = this.width * this.grid.pxStep;
}
GridElement.prototype.setHeight = function(height)
{
    this.height = height;
    this.document.style.height = this.height * this.grid.pxStep;
}
GridElement.prototype.getHorizontalSize = function() {
    return {
        begin: this.x,
        end: this.x + this.width
    };
}


GridElement.behavior = {};
GridElement.behavior.movable =  {
    nextMoveDirection: 'right',
    moveSpeed: 1,
    moveStatus: true,
    move: function() {
        var that = this;
        if (!this.moveStatus) {
            return;
        }
        var direction = this.nextMoveDirection;
        var step = this.moveSpeed;

        var isHit = false;
        this.grid.elements.forEach(function (element, index) {
            if (that === element) {
                return;
            }

            if (direction == 'left') {
                if (element.x + element.width == that.x && that.grid.isSideHit(element.getVerticalSize(), that.getVerticalSize())) {
                    isHit = true;
                    return;
                }
            } else if (direction == 'right') {
                if (element.x == that.x + that.width && that.grid.isSideHit(element.getVerticalSize(), that.getVerticalSize())) {
                    isHit = true;
                    return;
                }
            } else if (direction == 'up') {
                if (element.y + element.height == that.y && that.grid.isSideHit(element.getHorizontalSize(), that.getHorizontalSize())) {
                    isHit = true;
                    return;
                }
            } else if (direction == 'down') {
                if (element.y == that.y + that.height && that.grid.isSideHit(element.getHorizontalSize(), that.getHorizontalSize())) {
                    isHit = true;
                    return;
                }
            } else {
                return;
            }
        });

        if (isHit) {
            this.moveStatus = false;
        } else {
            if (direction == 'left') {
                this.x = this.x - step;
            } else if (direction == 'right') {
                this.x = this.x + step;
            } else if (direction == 'up') {
                this.y = this.y - step;
            } else if (direction == 'down') {
                this.y = this.y + step;
            } else {
                new Error('Error');
                return;
            }

            //this.grid.drawElement(this);
        }
    }
}