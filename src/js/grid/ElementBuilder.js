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

    while(countH < heightDivide) {
        var countW = 0;
        while(countW < widthDivide) {
            var border = new elementClass;
            border.x = x + countW * itemWidth;
            border.y = y + countH * itemHeight;
            border.height = itemHeight;
            border.width = itemWidth;

            grid.addElement(border);

            countW++;
        }
        countH++;
    }
}

export default buildElement;