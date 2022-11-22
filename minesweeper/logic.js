


const tile_status = {
    hidden: 'hidden',
    mine: 'mine',
    number: 'number',
    marked: 'marked',
}

export function createBoard(boardSize, numberOfMines) {
    let board = [];
    const minePositions = getMinePositions(boardSize, numberOfMines)

    for (let x = 0; x < boardSize; x++) {
        
        let row = [];
        for (let y = 0; y < boardSize; y++) {

            const element = document.createElement('div')
            element.dataset.status = tile_status.hidden

            const tile = {
                element,
                x,
                y,
                mine: true,
                get status() {
                    return this.element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                }
            };
            row.push(tile)
        }

        board.push(row)   
    }

    return board
}

function getMinePositions(boardSize, numberOfMines) {
    const positions = []

    while (positions.length < numberOfMines) {
        const position = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize)
        }
    }
    return positions
}

function positionMatch(a, b) {
    
}


function randomNumber(highestNr) {
    let nr = Math.floor(Math.random () * highestNr)
    return nr
}

console.log(randomNumber(10));