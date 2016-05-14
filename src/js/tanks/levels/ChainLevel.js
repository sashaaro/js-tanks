import Level from './level.js';
import OneLevel from './oneLevel.js';

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