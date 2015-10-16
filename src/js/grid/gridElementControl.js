var GridElementControl = function() {
    var directions = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }

    this.take = function(gridElement) {
        document.addEventListener('keyup', function(e) {
            gridElement.moveStatus = true;
            var direction = directions[e.keyCode];
            if(direction) {
                gridElement.nextMoveDirection = direction;
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