// var deportes = {
//     conBalon: ['Futbol', 'Basketball', 'Golf'],
//     sinBalon: ['Boxeo', 'Surf', 'Trekking'],
//  };
//  var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
//  console.log(persona)

// // HAS OWN PROPERTY
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('nombre');

// console.log(tienePropiedad);

// // KEYS
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro);

// console.log(todasLasPropiedades);

// for (let prop in mundo) {
//    console.log('Esta es la propiedad: ', prop);
//    console.log('Este es el valor: ', mundo[prop]);
// }


//  //THIS
// var mascota = {
//     animal: 'Perro',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueño: 'María López',
//     info: function() {
//        console.log('Mi perro es un  ' + this.raza);
//     },
//  };

//  mascota.info();


//console.log({}) // sirve para agrupar

// let user = {
//     name: "nelson", //NAME(CLAVE):VALOR
//     username: "gonzalez",
//     edad: 25,
//     hobbie: ["programar","Gimnasio", "dormir"], // arreglo
//     adress: { 
//         street:"bogota",
//         city: "bogota D.C"
//     },
//     showFullname(){ //es lo mismo que showFullname:funtion(){}
//         return "NELSON GONZALEZ"
//     }

// }

// console.log(user.showFullname())

// const account = {
//     numero:"12345678",
//     amount:100,
//     sumarAmount(){
//         this.amount = this.amount +100;
//     }
// }

// account.sumarAmount();
// account.sumarAmount();
// account.sumarAmount();
// console.log(account);

//CONSTRUCTOR
const person = new Object()
console.log(person)

function Person (name, lastname, age){
    this.name=name,
    this.lastname=lastname,
    this.age=age,
    this.displayName = function(){
        return `${this.name} ${this.lastname} ${this.age}`
    }
}
const nelson = new Person("nelson","gonzalez", 28) //creamos instancias a partir del constructor

console.log(nelson.displayName())
console.log(nelson)

Person.prototype.greet=function(){ //alteramos el objeto para agregar propiedades nuevas prototype
    //le estamos agregando un metodo
    return `Hola soy ${this.name}`
}
console.log(nelson.greet())