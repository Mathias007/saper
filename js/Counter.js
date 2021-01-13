import { UI } from "./UI.js";

export class Counter extends UI {
    value = null;
    #element = null;

    init() {
        this.#element = this.getElement(this.UiSelectors.counter);
    }

    setValue(value) {
        this.value = value;
        this.#updateValue();
    }

    increment() {
        this.value++;
        this.#updateValue();
    }

    decrement() {
        this.value--;
        this.#updateValue();
    }

    #updateValue() {
        this.#element.textContent = this.value;
    }
}
