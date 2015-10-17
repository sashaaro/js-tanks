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