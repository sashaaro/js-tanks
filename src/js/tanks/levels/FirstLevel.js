import utils from '../../utils.js';
import Level from './Level.js';
import Well from '../Well.js';
import SteelWell from '../SteelWell.js';
import Tank from '../Tank.js';
import Weapon from '../Weapon.js';
import GridElementControl from '../../grid/GridElementControl.js';
import GridElement from '../../grid/GridElement.js';

class FirstLevel extends Level {
    init () {
        var border = new SteelWell();
        border.x = this.grid.width - 10;
        this.grid.addElement(border);
        border.height = this.grid.height;

        border = new SteelWell();
        this.grid.addElement(border, 0, 0);
        border.height = this.grid.width;

        border = new SteelWell();
        this.grid.addElement(border, 0, 0);
        border.width = this.grid.width;

        border = new SteelWell();
        border.y = this.grid.height-10;
        this.grid.addElement(border);
        border.width = this.grid.width;

        border = new Well();
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

        border = new Well();
        border.x = 30;
        border.y = 110;
        this.grid.addElement(border);
        border = new Well();
        border.x = 40;
        border.y = 110;
        this.grid.addElement(border);


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

        var enemyTank = new Tank();
        enemyTank.x = 100;
        enemyTank.y = 100;
        this.grid.addElement(enemyTank);

        var gridControl = new GridElementControl();

        gridControl.take(myTank);
        gridControl.computer(enemyTank);
        this.enemyTank = enemyTank;
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