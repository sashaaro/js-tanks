import utils from '../utils.js';
import Well from './Well.js';

class SteelWell extends Well {
    constructor() {
        super();
        this.document.className = 'steel grid-element';
        this.strong = true;
    }
}

export default SteelWell;