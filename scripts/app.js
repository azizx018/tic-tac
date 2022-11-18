const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop')

const editPlayer1ButtonElement = document.getElementById('player1-edit');
const editPlayer2ButtonElement = document.getElementById('player2-edit');
const cancelConfigBtn = document.getElementById('cancel-config-btn');

editPlayer1ButtonElement.addEventListener('click', openPlayerConfig);
editPlayer2ButtonElement.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);