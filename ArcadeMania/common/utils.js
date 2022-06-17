function showAlert(string) {
    const message = `<div class="game-alert">
                        <div class="game-alert-message">
                            ${string}
                        </div>
                    </div>`;

    const gameArea = document.querySelector('.game-area');
    gameArea.innerHTML += message;
}

const restartButton = document.getElementById('restart');
if(restartButton!=null)
    restartButton.addEventListener('click', function(){
       window.location.reload(); // ricarico la pagina
    });

const backButton = document.getElementById('back');
if(backButton!=null)
    backButton.addEventListener('click', function () {
        window.location.href = "../index.html";
    });