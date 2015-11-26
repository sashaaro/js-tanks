var Game = function(grid, render)
{
    this.grid = grid;
    this.render = render;
}

Game.prototype.run = function(delay)
{
    var that = this;
    this.render.drawElement(this.grid);
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
        if(element.elements) {
            var render = new HtmlRender(element, element.document, this.render.pxStep);
            var game = new Game(element, render);
            render.drawElement(game.grid);
            game.time();
            game.render.reDraw();
        }
    }
}