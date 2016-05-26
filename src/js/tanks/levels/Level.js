import TimeHandler from '../../grid/TimeHandler.js';

class Level extends TimeHandler {
    constructor(game) {
        super(game);
        this.grid = this.game.grid;
    }
    init () {
        throw new Error('Level have not implementation');
    }
    time () {
        throw new Error('Level have not implementation');
    }
}

export default Level;