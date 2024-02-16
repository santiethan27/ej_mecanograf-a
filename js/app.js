const teclas = document.querySelectorAll('.teclado a');
const cantidadTeclas = teclas.length;
var tecla = "";

const teclasArray = [

    ['ESC', 'Escape'],
    ['1', '1'],
    ['2', '2'],
    ['3', '3'],
    ['4', '4'],
    ['5', '5'],
    ['6', '6'],
    ['7', '7'],
    ['8', '8'],
    ['9', '9'],
    ['0', '0'],
    ['\'', '\''],
    ['¿', '¿'],
    ['BACK', 'Backspace'],

    ['TAB', 'Tab'],
    ['Q', 'Q'],
    ['W', 'W'],
    ['E', 'E'],
    ['R', 'R'],
    ['T', 'T'],
    ['Y', 'Y'],
    ['U', 'U'],
    ['I', 'I'],
    ['O', 'O'],
    ['P', 'P'],
    ['´', 'Dead'],
    ['+', '+'],
    ['}', '}'],

    ['CAPS', 'CapsLock'],
    ['A', 'A'],
    ['S', 'S'],
    ['D', 'D'],
    ['F', 'F'],
    ['G', 'G'],
    ['H', 'H'],
    ['J', 'J'],
    ['K', 'K'],
    ['L', 'L'],
    ['Ñ', 'Ñ'],
    ['{', '{'],
    ['ENTER', 'Enter'],

    ['SHIFT', 'Shift'],
    ['Z', 'Z'],
    ['X', 'X'],
    ['C', 'C'],
    ['V', 'V'],
    ['B', 'B'],
    ['N', 'N'],
    ['M', 'M'],
    [',', ','],
    ['.', '.'],
    ['-', '-'],
    ['SHIFT', 'Shift']
  ];  

document.addEventListener('keydown', function(event) {
    let botonPresionado = event.key.toLowerCase();
    let boton = teclasArray[tecla][1].toLowerCase();
    if(botonPresionado == boton){
        newTecla();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    newTecla();
})

function newTecla(){
    if(tecla !== ""){
    teclas[tecla].classList.toggle('active');
    }
    teclas[teclaAleatoria()].classList.toggle('active');
}

function teclaAleatoria(){
    tecla = Math.trunc(Math.random() * (cantidadTeclas-1));
    return tecla;
}