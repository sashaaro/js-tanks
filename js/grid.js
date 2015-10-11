var helper = {
    coverRange: function (begin1, end1, begin2, end2) {
        return !(begin1 >= end2 || end1 <= begin2);
    }
}

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
        return helper.coverRange(size.begin, size.end, otherSize.begin, otherSize.end)
    }
}

var GridElement = function(document) {
    this.document = document;
    this.grid = null;
    this.x = null;
    this.y = null;
    this.width = null;
    this.height = null;
}

GridElement.prototype.updateSize = function(){
    this.width = this.document.offsetWidth / this.grid.pxStep;
    this.height = this.document.offsetHeight / this.grid.pxStep;
}
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

            this.grid.drawElement(this);
        }
    }
}

function extend(object)
{
    var mixins = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < mixins.length; ++i)
    {
        for (var prop in mixins[i])
        {
            if(object.prototype) {
                if (typeof object.prototype[prop] === "undefined")
                {
                    object.prototype[prop] = mixins[i][prop];
                }
            } else {
                object[prop] = mixins[i][prop];
            }
        }
    }
}

//extend(GridElement, GridElement.behavior.movable);
function hasBehaviour(object, behaviour)
{
    for(var property in behaviour) {
        if(!object[property]) {
            return false;
        }
    }
    return true;
}

var ElementFactory = function() {
    this.createTank = function() {
        var tank = document.createElement('div');
        tank.className = 'tank grid-element';
        gridDocument.appendChild(tank);
        return new GridElement(tank);
    }
    this.createWell = function() {
        var wall = document.createElement('div');
        wall.className = 'wall grid-element';
        gridDocument.appendChild(wall);
        return new GridElement(wall);
    }
}

var GridElementControl = function() {
    this.take = function(gridElement) {
        document.addEventListener('keyup', function(e) {
            gridElement.moveStatus = true;
            if(e.keyIdentifier == 'Up') {
                gridElement.nextMoveDirection = 'up';
            }else if(e.keyIdentifier == 'Down') {
                gridElement.nextMoveDirection = 'down';
            }else if(e.keyIdentifier == 'Left') {
                gridElement.nextMoveDirection = 'left';
            }else if(e.keyIdentifier == 'Right') {
                gridElement.nextMoveDirection = 'right';
            }
        });
    }
    this.computer = function(gridElement) {
        setInterval(function() {
            var direction = ['left', 'right', 'up', 'down'];
            gridElement.nextMoveDirection = direction[Math.floor((Math.random() * 3))];
            if(!gridElement.moveStatus) {
                gridElement.moveStatus = true;
            }
        }, 450);
    }
}