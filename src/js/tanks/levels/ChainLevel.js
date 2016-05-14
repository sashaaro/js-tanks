import Level from './Level.js';
import OneLevel from './OneLevel.js';

class ChainLevel extends Level {
    constructor() {
        super();
        this.levels = [];
    }

    time () {
        this.levels.forEach(function(level, index) {
            if (level.time()) {

            }
        });
    }
}

export default ChainLevel;