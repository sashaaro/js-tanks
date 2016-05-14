import utils from '../utils.js';

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

GridElement.behavior.embedable = {
    addElements: [],
    elements: [],
    removeElements: [],
    addElement: function(gridElement) {
        this.addElements.push(gridElement);
        gridElement.grid = this;
    },
}



GridElement.behavior.hitable = {
    hitTrigger: null,
    isHit: function() {
        var that = this;
        var direction = this.nextMoveDirection;

        var isHit = false;
        this.grid.elements.forEach(function (element) {
            if (isHit || that === element || !utils.hasBehaviour(element, GridElement.behavior.hitable)) {
                return;
            }

            if (direction == element.nextMoveDirection) {
                return;
            }
//console.log(1)
            if (direction == 'left' && element.x + element.width == that.x && that.grid.isSideHit(element.getVerticalSize(), that.getVerticalSize()) ||
                direction == 'right' && element.x == that.x + that.width && that.grid.isSideHit(element.getVerticalSize(), that.getVerticalSize()) ||
                direction == 'up' && element.y + element.height == that.y && that.grid.isSideHit(element.getHorizontalSize(), that.getHorizontalSize()) ||
                direction == 'down' && element.y == that.y + that.height && that.grid.isSideHit(element.getHorizontalSize(), that.getHorizontalSize())
            ) {
                isHit = true;
                if(element.hitTrigger) {
                    element.hitTrigger(that);
                }
                if(that.hitTrigger) {
                    that.hitTrigger(element);
                }
            }
        });

        return isHit;
    }
}

GridElement.behavior.movable = {
    nextMoveDirection: 'right',
    moveSpeed: 1,
    moveStatus: true,
    move: function() {
        if (!this.moveStatus) {
            return;
        }
        var direction = this.nextMoveDirection;
        var step = this.moveSpeed;

        if (utils.hasBehaviour(this, GridElement.behavior.hitable) && this.isHit()) {
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
        }
    }
}

GridElement.behavior.rotatable = {
    rotatePercent: 0 //percent turn
}

export default GridElement;