var GridElementControl = function() {
    var directions = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }
    var rotates = {
        left: -25,
        up: 0,
        right: 25,
        down: 50
    }

    this.take = function(gridElement) {
        document.addEventListener('keyup', function(e) {
            gridElement.moveStatus = true;
            var direction = directions[e.keyCode];
            if(direction) {
                gridElement.nextMoveDirection = direction;

                if (utils.hasBehaviour(gridElement, GridElement.behavior.rotatable)) {
                    gridElement.rotatePercent = rotates[direction];
                }
            }
        });
    }
    this.computer = function(gridElement) {
        setInterval(function() {
            var directions = ['left', 'right', 'up', 'down'];
            var direction = directions[Math.floor((Math.random() * 3))];
            if(direction) {
                gridElement.nextMoveDirection = direction;

                if (utils.hasBehaviour(gridElement, GridElement.behavior.rotatable)) {
                    gridElement.rotatePercent = rotates[direction];
                }
            }
            if(!gridElement.moveStatus) {
                gridElement.moveStatus = true;
            }
        }, 450);
    }
}