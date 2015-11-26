ChainLevel = function() {
    this.levels = [];
}

ChainLevel.prototype = Object.create(Level);
ChainLevel.prototype.constructor = OneLevel;

ChainLevel.prototype.time = function()
{
    var isEnd = false;
    this.levels.forEach(function(level, index) {
        if (level.time()) {
            isEnd = true;
        }
    });

    return isEnd;
}