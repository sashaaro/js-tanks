var ElementFactory = function() {
    this.createTank = function() {
        return new Tank();
    },
    this.createWell = function() {
        return new Well();
    }
}
