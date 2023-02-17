function limpiar() {
        var consoleDiv = document.getElementById('console');
        if (consoleDiv.childElementCount > 12) {
          consoleDiv.innerHTML = "";
        }
    
      };
      