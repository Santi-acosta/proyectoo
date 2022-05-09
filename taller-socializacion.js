/*
let edad = prompt("introduzca una edad");
if (edad  == 15 ) {
    console.log("tiene 15");
}
if (edad == 20 ) {
    console.log("tiene 20");
}
if (edad == 30) {
    console.log("tiene 30");
}
if (edad != 15 && edad != 20 && edad != 30) {
    console.log("introduzca una edad valida");
}
*/

let edad = parseInt(prompt("introduzca una edad"));

switch (edad) {
    case 15: 
    console.log("tiene 15");
        break;
    case 20:
    console.log("tiene 20");
        break;
    case 30:

    console.log("tiene 30");
        break;
    default:
        alert("ingrese una edad validad")
        break;
}
        
















