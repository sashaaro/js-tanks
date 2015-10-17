GridElement.behavior.embedable = {
    addElements: [],
    elements: [],
    removeElements: [],
    addElement: function(gridElement) {
        this.addElements.push(gridElement);
        gridElement.grid = this;
    },
}