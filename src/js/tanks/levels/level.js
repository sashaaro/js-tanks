function Level(grid) {
    this.grid = grid;
}

Level.prototype.init = function()
{
    throw new Error('Level have not implementation');
}

Level.prototype.time = function()
{
    throw new Error('Level have not implementation');
}

export default Level;