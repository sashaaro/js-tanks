var Game = function(grid, render)
{
    this.grid = grid;
    this.render = render;
}

Game.prototype.run = function(delay)
{
    var that = this;
    setInterval(function() {
        that.time();
        that.render.reDraw();
    }, delay);
}

Game.prototype.time = function()
{
    for(var prop in this.grid.elements) {
        var element = this.grid.elements[prop];
        if((utils.hasBehaviour(element, GridElement.behavior.movable))) {
            element.move();
        }
    }
}