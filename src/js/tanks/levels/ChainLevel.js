import Level from './level.js';
import OneLevel from './oneLevel.js';

ChainLevel = function() {
    this.levels = [];
}

ChainLevel.prototype = Object.create(Level);
ChainLevel.prototype.constructor = OneLevel;

ChainLevel.prototype.time = function()
{
    this.levels.forEach(function(level, index) {
        if (level.time()) {

        }
    });
}

export default ChainLevel;