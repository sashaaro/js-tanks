import utils from '../utils.js';
import GridElement from './GridElement.js';

class GridElementControl {
    take (gridElement) {
        document.addEventListener('keyup', function(e) {
            gridElement.moveStatus = true;
            var direction = GridElementControl.DIRECTIONS[e.keyCode];
            if(direction) {
                gridElement.nextMoveDirection = direction;

                if (utils.hasBehaviour(gridElement, GridElement.behavior.rotatable)) {
                    gridElement.rotatePercent = GridElementControl.ROTATES[direction];
                }
            } else if(e.keyCode == 32 && utils.hasBehaviour(gridElement.elements[0], GridElement.behavior.fireable)) {
                gridElement.elements[0].fire();
            }
        });
    }

    computer (gridElement) {
        setInterval(function() {
            var DIRECTIONS = ['left', 'right', 'up', 'down'];
            var direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
            if(direction) {
                gridElement.nextMoveDirection = direction;

                if (utils.hasBehaviour(gridElement, GridElement.behavior.rotatable)) {
                    gridElement.rotatePercent = GridElementControl.ROTATES[direction];
                }
            }
            if(!gridElement.moveStatus) {
                gridElement.moveStatus = true;
            }
        }, 450);
    }
    // multiple game
    socketServer (gridElement, socket) {
        socket.onopen = function() {
            console.log('Open');
        };

        socket.onmessage = function(event) {
            console.log(event.data);
        };

        document.addEventListener('keyup', function(e) {
            socket.send(e.keyCode);
        });
    }
}

GridElementControl.DIRECTIONS = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}
GridElementControl.ROTATES = {
    left: -25,
    up: 0,
    right: 25,
    down: 50
}

export default GridElementControl;