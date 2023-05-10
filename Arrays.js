// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo'); //agrega dato al Final
colores.unshift('Verde'); // agrega dato al inicio
// POP y SHIFT
//colores.shift(); // elimina el primer dato del arreglo
//colores.pop(); // elimina el ultimo dato

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí'); // verifica que este el dato dentro del arreglo

//console.log(existeDali);

// EVERY
var numeros = [10, 1, 8, 9];
var cumplenCondicion = numeros.every((num) => {  
    // determina si dentro del arreglo todos los numeros son mayores que 5
    return num > 4;
});


console.log(cumplenCondicion);

var Nombre = "Nelson";
var palabraSeparada = Nombre.split("");
palabraSeparada.pop();
palabraSeparada.push('N');
console.log(palabraSeparada);
// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

function encontrarLetra(string){
    var palabra = string.split('');
    for (let i=0; i < palabra.length; i++){
        if(palabra[i]=== 'p'){
            console.log("si contiene la palabra P")
        }
    }
}
encontrarLetra('pablo');