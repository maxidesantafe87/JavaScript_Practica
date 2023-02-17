function divisoresCodigoConsola() {

    // PUNTO 05
    console.log('%c-------------------------- Punto   05   -------------------------- ', 'background: orange; color: black');
    
    let numero = parseInt(prompt("Ingresa un número: "));
    
    
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        console.log(i);
        
      }
    }
    console.log('%c-------------------------- Punto FIN 05 -------------------------- ', 'background: orange; color: black');

}

// MODAL 


function divisoresCodigoGrafico() {
limpiar();
  let numero = parseInt(prompt("Ingresa un número: "));
  let elementosUl = document.getElementById("divisores_divisores");
  elementosUl.innerHTML = ""; // Limpiamos la lista
  
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      let li = document.createElement("li");
      li.textContent = i;
      elementosUl.appendChild(li);
      elementosUl.style.fontSize = "20px";
      elementosUl.style.color = "green";      
      console.log(i);
      
      }
      
  }
  console.log('%c-------------------------- Punto FIN 05 -------------------------- ', 'background: orange; color: black');
}

function limpiar() {
let elementosUl = document.getElementById("divisores_divisores");
elementosUl.innerHTML = ""; // Limpiamos la lista

}
