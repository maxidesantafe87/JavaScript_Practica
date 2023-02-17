function arrayCodigo() {

    // PUNTO 06
    console.log('%c-------------------------- Punto   06   -------------------------- ', 'background: orange; color: black');
    limpiar();

    let miArray = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5", "elemento6", "elemento7", "elemento8", "elemento9", "elemento10"];

    let elementosUl = document.getElementById("elementos_del_array");
    
    miArray.forEach(function(elementos_del_array) {
      let li = document.createElement("li");
      li.textContent = elementos_del_array;
      elementosUl.appendChild(li);
      elementosUl.style.fontSize = "20px";
      elementosUl.style.color = "green";
      console.log()
    });


    console.log(miArray);


    console.log('%c-------------------------- Punto FIN 06 -------------------------- ', 'background: pink; color: black');
}




function limpiar() {
  let elementosUl = document.getElementById("elementos_del_array");
  elementosUl.innerHTML = ""; // Limpiamos la lista
   
  }