import { UI } from "./UI.js";

export class ResetButton extends UI {
    element = this.getElement(this.UiSelectors.resetButton);

    changeEmotion(emotion) {
        this.element
            .querySelector("use")
            .setAttribute("href", `assets/sprite.svg#${emotion}`);
    }
}
