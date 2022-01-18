let turn = 0;
const cells = document.querySelectorAll('.cell');

function checkWin(symbol) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (symbol === cells[combination[0]].innerText &&
            symbol === cells[combination[1]].innerText &&
            symbol === cells[combination[2]].innerText) {
            return true;
        }
    }
    return false;
}

function checkGameOver() {
    console.log(turn)
    return turn === 9;
}

function addSymbol(cell) {
    if (checkGameOver()) {
        return;
    }
    if (cell.innerText !== "") return;

    const sign = turn % 2 === 0 ? 'X' : 'O';
    cell.innerText = sign;

    if (checkWin(turn % 2 === 0 ? "X" : "O")) {
        showAlert("Player " + sign + " has won!");
        return;
    }

    turn += 1;

    if (checkGameOver()) {
        showAlert("Pareggio");
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function () {
        addSymbol(cells[i])
    });
}


