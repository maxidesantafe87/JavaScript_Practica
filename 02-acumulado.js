
function acumuladoCodigoGrafico() {
// Punto 02

console.log('%c-------------------------- Punto   02   -------------------------- ', 'background: pink; color: black');


// Creo variable para los elementos y vacio.
let elementosUl = document.getElementById("elementos_acumulados");
elementosUl.innerHTML = ""; // Limpiamos la lista

// Creamos una variable para almacenar el acumulador
let acumulador = 0;

// Creamos un ciclo "while" que se ejecutará hasta poner 0
while (true) {
  // QUe ponga un numero y lo convierto en numero. 
 let numero = Number(prompt("Ingrese un número (o ingrese 0 para terminar):"));

    
  // Si pone 0 termina
  if (numero === 0) {
    break;
  }

  // Si es otro numero lo voy sumando.
  acumulador += numero;
}

// Cuando termina muestra lo que se acumulo

elementosUl.innerText = 'El valor acumulado es: ' + acumulador; // muestro en modal
elementosUl.style.fontSize = "20px";
elementosUl.style.color = "green";
console.log("El valor acumulado es: " + acumulador);

console.log('%c-------------------------- Punto FIN 02 -------------------------- ', 'background: pink; color: black');

}

function limpiar() {
  let elementosUl = document.getElementById("elementos_acumulados");
  elementosUl.innerHTML = ""; // Limpiamos la lista
   
  }