function multiplicarCodigoGrafico() {
    // punto 01
  
    console.log('%c-------------------------- Punto   01   -------------------------- ', 'background: pink; color: black');
  
    // Creo variable para los elementos y vacio.
    let elementosUl = document.getElementById("elementos_multiplicaciones");
    elementosUl.innerHTML = ""; // Limpiamos la lista
  
    let numero = parseInt(prompt("Ingresa un número"));
  
    // Mostramos la tabla de multiplicar del número ingresado
    console.log("Tabla de multiplicar del " + numero + ":");
  
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      
      console.log(numero + " x " + i + " = " + resultado);
  
      // Agregamos el resultado a la lista en el HTML
      let nuevoElemento = document.createElement("li");
      let textoElemento = document.createTextNode(numero + " x " + i + " = " + resultado);
      nuevoElemento.appendChild(textoElemento);
      elementosUl.appendChild(nuevoElemento);
      elementosUl.style.fontSize = "20px";
      elementosUl.style.color = "green";
    }
  }
  
  console.log('%c-------------------------- Punto FIN 01 -------------------------- ', 'background: pink; color: black');
  
  