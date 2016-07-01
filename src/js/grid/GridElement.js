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

            isHit = utils.isSideHit(element.getHorizontalSize(), this.getHorizontalSize()) && utils.isSideHit(element.getVerticalSize(), this.getVerticalSize());

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
    moveCoordinates: function() {
        if (this.nextMoveDirection == 'left') {
            this.x = this.x - this.moveSpeed;
        } else if (this.nextMoveDirection == 'right') {
            this.x = this.x + this.moveSpeed;
        } else if (this.nextMoveDirection == 'up') {
            this.y = this.y - this.moveSpeed;
        } else if (this.nextMoveDirection == 'down') {
            this.y = this.y + this.moveSpeed;
        } else {
            new Error('Error');
            return;
        }
    },
    moveBackCoordinates: function() {
        if (this.nextMoveDirection == 'left') {
            this.x = this.x + this.moveSpeed;
        } else if (this.nextMoveDirection == 'right') {
            this.x = this.x - this.moveSpeed;
        } else if (this.nextMoveDirection == 'up') {
            this.y = this.y + this.moveSpeed;
        } else if (this.nextMoveDirection == 'down') {
            this.y = this.y - this.moveSpeed;
        } else {
            new Error('Error');
            return;
        }
    },
    move: function() {
        if (!this.moveStatus) {
            return;
        }
        this.moveCoordinates();
        this.checkHit();
    },
    checkHit: function() {
        if (utils.hasBehaviour(this, GridElement.behavior.hitable) && this.isHit()) {
            this.moveBackCoordinates();
            this.moveStatus = false;
        }
    }
}

GridElement.behavior.rotatable = {
    rotatePercent: 0 //percent turn
}

export default GridElement;