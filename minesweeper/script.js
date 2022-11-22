
import { createBoard } from "./logic.js";


const board_size = 10;
const mine_amount = 2;

const board_html = document.querySelector('.board')
const board_generated = createBoard(board_size, mine_amount);

board_generated.forEach( row => {
    row.forEach(tile => {
        board_html.append(tile.element)
        // console.log(tile.element.dataset.status);
    })
})
board_html.style.setProperty('--size', board_size)
