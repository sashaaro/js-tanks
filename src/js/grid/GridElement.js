import utils from '../utils.js';

/**
 * HTML Grid Element
 */
class GridElement {
    constructor(document) {
        this.document = document;
        this.grid = null;
        this.x = null;
        this.y = null;
        this.width = 0;
        this.height = 0;
    }
    getVerticalSize() {
        return {
            begin: this.y,
            end: this.y + this.height
        };
    }
    getHorizontalSize() {
        return {
            begin: this.x,
            end: this.x + this.width
        };
    }
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
        var isHit = false;
        this.grid.elements.forEach((element) => {
            if (isHit || this === element || !utils.hasBehaviour(element, GridElement.behavior.hitable)) {
                return;
            }

            if (this.nextMoveDirection == element.nextMoveDirection) {
                return;
            }

            isHit = this.nextMoveDirection == 'left' && element.x + element.width == this.x && this.grid.isSideHit(element.getVerticalSize(), this.getVerticalSize()) ||
                this.nextMoveDirection == 'right' && element.x == this.x + this.width && this.grid.isSideHit(element.getVerticalSize(), this.getVerticalSize()) ||
                this.nextMoveDirection == 'up' && element.y + element.height == this.y && this.grid.isSideHit(element.getHorizontalSize(), this.getHorizontalSize()) ||
                this.nextMoveDirection == 'down' && element.y == this.y + this.height && this.grid.isSideHit(element.getHorizontalSize(), this.getHorizontalSize());

            if (isHit) {
                if(element.hitTrigger) {
                    element.hitTrigger(this);
                }
                if(this.hitTrigger) {
                    this.hitTrigger(element);
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