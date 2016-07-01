import ReRenderTimeHandler from './ReRenderTimeHandler.js';

class Game {
    constructor(grid, render) {
        this.grid = grid;
        this.render = render;
        var reRenderTimeHandler = new ReRenderTimeHandler(this);
        this.timeHandlers = [
            reRenderTimeHandler
        ];
        this.render.drawElementHandler = [
            reRenderTimeHandler
        ];
        this.intervalID = null;
    }
    run(delay) {
        this.render.drawElement(this.grid);
        this.intervalID = setInterval(() => {
            this.time();
            this.render.reDraw();
            this.afterTime();
        }, delay);
    }
    over() {
        clearInterval(this.intervalID);
    }
    time() {
        this.timeHandlers.forEach((handler) => {
            handler.time();
        })
    }
    afterTime() {
        this.timeHandlers.forEach((handler) => {
            handler.afterTime();
        })
    }
}

export default Game;