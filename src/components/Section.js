export default class Section {
    constructor({ renderer }, containerSelector) {
        //this._renderedItems = items; 
        this._renderer = renderer; 
        this._container = document.querySelector(containerSelector);
    }
    renderItems(data) {
        data.forEach(item => {
            this.addItem(item);
        });
    }

    addItem(element) { 
        const dataCard = this._renderer(element)
        this._container.prepend(dataCard)
    };
}