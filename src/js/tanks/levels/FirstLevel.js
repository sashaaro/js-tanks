import utils from '../../utils.js';
import Level from './Level.js';
import Well from '../Well.js';
import SteelWell from '../SteelWell.js';
import Tank from '../Tank.js';
import Weapon from '../Weapon.js';
import GridElementControl from '../../grid/GridElementControl.js';
import GridElement from '../../grid/GridElement.js';
import buildElement from '../../grid/ElementBuilder.js';

class FirstLevel extends Level {
    init () {
        var x = this.grid.width - 10;
        var y = 0;
        var height = this.grid.height;
        var width = 10;
        buildElement(this.grid, SteelWell, x, y, height, width, 14, 1);

        buildElement(this.grid, SteelWell, 0, 0, height, width, 14, 1);

        buildElement(this.grid, SteelWell, 0, 0, 10, this.grid.width, 1, 14);
        buildElement(this.grid, SteelWell, 0, this.grid.height-10, 10, this.grid.width, 1, 14);

        buildElement(this.grid, Well, 40, 10, this.grid.height - 20, 10, 10, 1);

        var border = new Well();
        border.x = 20;
        border.y = 130;
        this.grid.addElement(border);

        border = new Well();
        border.x = 20;
        border.y = 120;
        this.grid.addElement(border);

        border = new Well();
        border.x = 20;
        border.y = 110;
        this.grid.addElement(border);

        /*border = new Well();
        border.x = 30;
        border.y = 110;
        this.grid.addElement(border);
        border = new Well();
        border.x = 40;
        border.y = 110;
        this.grid.addElement(border);*/


        border = new Well();
        border.x = 130;
        border.y = 120;
        this.grid.addElement(border);
        border = new Well();
        border.x = 120;
        border.y = 120;
        this.grid.addElement(border);



        var myTank = new Tank();
        utils.extend(myTank, GridElement.behavior.embedable);

        var weapon = new Weapon();
        myTank.addElement(weapon);

        myTank.x = 10;
        myTank.y = 130;
        myTank.nextMoveDirection = 'up';
        this.grid.addElement(myTank);
        //myTank.moveSpeed = 3;

        var gridControl = new GridElementControl();

        gridControl.take(myTank);

        var enemyTank = new Tank();
        enemyTank.x = 100;
        enemyTank.y = 100;
        this.grid.addElement(enemyTank);
        gridControl.computer(enemyTank);

        this.enemyTank = enemyTank;

        var enemyTank = new Tank();
        enemyTank.x = 110;
        enemyTank.y = 100;
        this.grid.addElement(enemyTank);
        gridControl.computer(enemyTank);

        var enemyTank = new Tank();
        enemyTank.x = 120;
        enemyTank.y = 100;
        this.grid.addElement(enemyTank);
        gridControl.computer(enemyTank);

        var enemyTank = new Tank();
        enemyTank.x = 130;
        enemyTank.y = 100;
        this.grid.addElement(enemyTank);
        gridControl.computer(enemyTank);
    }

    time (game) {
        var that = this;
        var enemyTankExists = game.grid.elements.includes(that.enemyTank);
        if(!enemyTankExists) {
            game.over();
            alert('win'); //next level
        }
    }
}

export default FirstLevel;
