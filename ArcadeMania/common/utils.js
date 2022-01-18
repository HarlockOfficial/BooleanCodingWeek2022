function showAlert(string) {
    const message = `<div class="game-alert">
                        <div class="game-alert-message">
                            ${string}
                        </div>
                    </div>`;

    const gameArea = document.querySelector('.game-area');
    gameArea.innerHTML += message;
}