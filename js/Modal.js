import { UI } from "./UI.js";

export class Modal extends UI {
    buttonText = "";

    infoText = "";

    element = this.getElement(this.UiSelectors.modal);
    button = this.getElement(this.UiSelectors.modalButton);
    header = this.getElement(this.UiSelectors.modalHeader);

    toggleModal = () => {
        this.element.classList.toggle("hide");
    };

    setText() {
        this.header.textContent = this.infoText;
        this.button.textContent = this.buttonText;
    }
}
