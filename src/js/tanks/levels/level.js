class Level {
    constructor(grid) {
        this.grid = grid;
    }
    init () {
        throw new Error('Level have not implementation');
    }
    time () {
        throw new Error('Level have not implementation');
    }
}

export default Level;