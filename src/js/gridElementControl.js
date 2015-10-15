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