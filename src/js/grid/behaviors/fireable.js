GridElement.behavior.fireable = {
    bullet: null,
    fire: function() {
        this.bullet = new Bullet();
        this.bullet.nextMoveDirection = this.grid.nextMoveDirection;
        this.bullet.moveStatus = true;
        utils.extend(this.bullet, GridElement.behavior.rotatable);
        this.bullet.rotatePercent = this.grid.rotatePercent - 25;//todo remove

        this.bullet.x = this.grid.x + 10;
        this.bullet.y = this.grid.y + 10;

        this.grid.addElement(this.bullet);
    }
}