export class UI {
    UiSelectors = {
        board: "[data-board]",
        cell: "[data-cell]",
        counter: "[data-counter]",
        timer: "[data-timer]",
        resetButton: "[data-button-reset]",
        easyButton: "[data-button-easy]",
        normalButton: "[data-button-normal]",
        resetButton: "[data-button-expert]",
        modal: "[data-modal]",
        modalHeader: "[data-modal-header]",
        modalButton: "[data-modal-button]",
    };

    getElement(selector) {
        return document.querySelector(selector);
    }

    getElements(selector) {
        return document.querySelectorAll(selector);
    }
}
