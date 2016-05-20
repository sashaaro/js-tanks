// TODO maybe class
function buildElement(grid, elementClass, x, y, height, width, heightDivide, widthDivide) {
    x = x || 0;
    y = y || 0;
    heightDivide = heightDivide || 1;
    widthDivide = widthDivide || 1;

    var itemHeight = height / heightDivide;
    var itemWidth = width / widthDivide;
    var countH = 0;

    /*console.log(arguments);
    console.log(itemHeight);
    console.log(widthDivide);
    console.log(width);*/

    while(countH <= itemHeight) {
        var countW = 0;
        while(countW <= itemWidth) {
            var border = new elementClass;
            border.x = x;
            border.y = y;
            border.height = itemHeight;
            border.itemWidth = itemWidth;

            grid.addElement(border);


            console.log(1);
            return;
        }
        countH++;
        countW++;

        return;
    }
}

export default buildElement;