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
GridElement.behavior.movable = {
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
        }
    }
}

GridElement.behavior.rotatable = {
    rotatePercent: 0 //percent turn
}

GridElement.behavior.embedable = {
    addElements: [],
    elements: [],
    addElement: function(gridElement) {
        this.addElements.push(gridElement);
        gridElement.grid = this;
    },
}

GridElement.behavior.fireable = {
    bullet: null,
    fire: function() {
        this.bullet = new Bullet();
        this.bullet.nextMoveDirection = this.grid.nextMoveDirection;
        this.bullet.moveStatus = true;
        console.log(this.grid.x);
        console.log(this.grid.y);
        this.bullet.x = this.grid.x;
        this.bullet.y = this.grid.y;
        utils.extend(this.bullet, GridElement.behavior.rotatable);
        this.bullet.rotatePercent = this.grid.rotatePercent - 25;//todo remove

        this.grid.addElement(this.bullet);
        //console.log(utils.hasBehaviour(this.bullet, GridElement.behavior.movable))
    }
}