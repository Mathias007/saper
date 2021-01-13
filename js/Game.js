import { Cell } from "./Cell.js";
import { UI } from "./UI.js";
import { Counter } from "./Counter.js";
import { Timer } from "./Timer.js";

class Game extends UI {
    #config = {
        easy: {
            rows: 8,
            cols: 8,
            mines: 10,
        },
        normal: {
            rows: 16,
            cols: 16,
            mines: 40,
        },
        expert: {
            rows: 16,
            cols: 30,
            mines: 99,
        },
    };

    #counter = new Counter();
    #timer = new Timer();

    #numberOfRows = null;
    #numberOfCols = null;
    #numberOfMines = null;

    #cells = [];
    #cellsElements = null;

    #board = null;

    initializeGame() {
        this.#handleElements();
        this.#counter.init();
        this.#timer.init();
        this.#newGame();
    }

    #newGame(
        rows = this.#config.easy.rows,
        cols = this.#config.easy.cols,
        mines = this.#config.easy.mines
    ) {
        this.#numberOfRows = rows;
        this.#numberOfCols = cols;
        this.#numberOfMines = mines;

        this.#counter.setValue(this.#numberOfMines);
        this.#timer.startTimer();

        this.#setStyles();

        this.#generateCells();
        this.#renderBoard();

        this.#cellsElements = this.getElements(this.UiSelectors.cell);

        this.#addCellsEventListeners();
    }

    #handleElements() {
        this.#board = this.getElement(this.UiSelectors.board);
    }

    #addCellsEventListeners() {
        this.#cellsElements.forEach((element) => {
            element.addEventListener("click", this.#handleCellClick);
            element.addEventListener(
                "contextmenu",
                this.#handleCellContextMenu
            );
        });
    }

    #generateCells() {
        for (let row = 0; row < this.#numberOfRows; row++) {
            this.#cells[row] = []; // generujemy tablicę wewnątrz tablicy
            for (let col = 0; col < this.#numberOfCols; col++) {
                this.#cells[row].push(new Cell(col, row));
            }
        }
    }

    #renderBoard() {
        this.#cells.flat().forEach((cell) => {
            this.#board.insertAdjacentHTML("beforeend", cell.createElement());
            cell.element = cell.getElement(cell.selector);
        });
    }

    #handleCellClick = (e) => {
        const target = e.target;
        const rowIndex = parseInt(target.getAttribute("data-y"), 10);
        const colIndex = parseInt(target.getAttribute("data-x"), 10);

        this.#cells[rowIndex][colIndex].revealCell();
    };

    #handleCellContextMenu = (e) => {
        e.preventDefault();
        const target = e.target;
        const rowIndex = parseInt(target.getAttribute("data-y"), 10);
        const colIndex = parseInt(target.getAttribute("data-x"), 10);

        const cell = this.#cells[rowIndex][colIndex];

        if (cell.isReveal) return;

        if (cell.isFlagged) {
            this.#counter.increment();
            cell.toggleFlag();
            return;
        }

        if (!!this.#counter.value) {
            this.#counter.decrement();
            cell.toggleFlag();
        }
    };

    #setStyles() {
        document.documentElement.style.setProperty(
            "--cells-in-row",
            this.#numberOfCols
        );
    }
}

window.onload = function () {
    const game = new Game();

    game.initializeGame();
};
