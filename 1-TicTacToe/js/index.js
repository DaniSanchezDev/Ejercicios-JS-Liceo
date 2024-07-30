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
let board = [
    [EMPTY,EMPTY,EMPTY,],
    [EMPTY,EMPTY,EMPTY,],
    [EMPTY,EMPTY,EMPTY,],
];
const PLAYER_1_IMAGE = './../img/x.jpg'
const PLAYER_2_IMAGE = './../img/circle.png'
const EMPTY_IMAGE = './../img/blank.png'
// creamos funcion para generar numero random
const generateRandomNumer = (min,max) => Math.floor(Math.random() + (max - min +1 )) + min;

turn = generateRandomNumer(1,2);

messageText.innerText = turn === PLAYER_1 ? 'Player 1 (X)' : 'Player 2 (0)';



