// FUNCIÓN CONSTRUCTORA
// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;
//  }
//  let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
//  console.log(miPrimerAuto);
//  console.log(miPrimerAuto.marca);

//  let miSegundoAuto = new Auto(4, 'azul', 'twingo', 2023, 4);
//  console.log(miSegundoAuto);
//  console.log(miSegundoAuto.año);

//  function formulario (nombre, edad, email, familiares){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.email = email;
//     this.familiares = familiares;
//  }

//  var PrimerForm = new formulario('Nelson', 25, 'nelson@gmail.com', 'si');
//  console.log(PrimerForm);
//  console.log(PrimerForm.email);

 // EXPRESIÓN DE CLASE
// class Auto {
//     constructor(puertas, color, marca, año, ruedas) {
//        this.puertas = puertas;
//        this.color = color;
//        this.marca = marca;
//        this.año = año;
//        this.ruedas = ruedas;
//     }
//  }
//  let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
//  console.log(miSegundoAuto);
//  console.log(miSegundoAuto.marca);

// class PrimerForm{
//     constructor(nombre, edad, email, familiares){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.email = email;
//         this.familiares = familiares;
//     }
//  }
//  let Formulario = new PrimerForm('nelson',23,'nelson@', 'no');
//  console.log(Formulario);
//  console.log(Formulario.email);


 function persona(nombre, edad){
    this.nombre = nombre; // propiedad publica
    let dni = "123456"; // esta propiedad solo se puede visualizar dentro de la funcion
    //console.log("Hola, soy" + " " + nombre)
    this.edad = edad;
    
    //metodos: es una accion que tiene esta clase
    this.getDni = function(){ 
        // como la función esta dentro de la clase persona si puede acceder a la propiedad dni;
        return dni;
    }
    // this.saludar = function(){
    //     return ("Hola soy" + " " + nombre +  " " + "tengo" + " " + edad + " " + "años")

    // }

 }
 //estamos creando un metodo fuera de la clase persona 
 persona.prototype.saludar = function(){
    return ("Hola soy" + " " + this.nombre +  " " + "tengo" + " " + this.edad + " " + "años")

}


 let objetoPersona = new persona("Nelson", 25); // instancia para llamar la clase

 //console.log(objetoPersona.nombre);
 console.log(objetoPersona.saludar());

//metodo split

 const cadena = "Hola, mundo, JavaScript";
const array = cadena.split(","); // separa la cadena haciendo caso al simbolo separador
console.log(array); // Output: ["Hola", "mundo", "JavaScript"]

//metodo reverse

const array2 = ["Hola", "mundo", "JavaScript"];
array.reverse();
console.log(array2); // Output: ["JavaScript", "mundo", "Hola"]
 