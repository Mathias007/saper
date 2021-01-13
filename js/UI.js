export class UI {
    UiSelectors = {
        board: "[data-board]",
        cell: "[data-cell]",
        counter: "[data-counter]",
        timer: "[data-timer]"
    };

    getElement(selector) {
        return document.querySelector(selector);
    }

    getElements(selector) {
        return document.querySelectorAll(selector);
    }
}
