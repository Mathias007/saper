import { Cell } from "./Cell.js";

class Game {
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

    #numberOfRows = null;
    #numberOfCols = null;
    #numberOfMines = null;

    #cells = [];

    initializeGame() {
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

        this.#generateCells();
    }

    #generateCells() {
        for (let row = 0; row < this.#numberOfRows; row++) {
            this.#cells[row] = []; // generujemy tablicę wewnątrz tablicy
            for (let col = 0; col < this.#numberOfCols; col++) {
                this.#cells[row].push(new Cell(col, row));
            }
        }
    }
}

window.onload = function () {
    const game = new Game();

    game.initializeGame();
};
