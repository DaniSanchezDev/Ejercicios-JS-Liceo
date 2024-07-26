const messageText = document.getElementById('message');
const newGameButton = document.getElementById('newGame');
const images = document.getElementsByClassName('cell');

// Creamos variables para los turnos
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const EMPTY = 0;
const DRAW = 0;

let turn = PLAYER_1;
// Ponemos el ganador al principio como vacio / nulo ( en java usaríamos -1)
let winner = null;








