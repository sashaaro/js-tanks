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