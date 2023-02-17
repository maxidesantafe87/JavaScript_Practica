(
    function() {
        var oldConsoleLog = console.log;
        console.log = function (message) {
          var consoleDiv = document.getElementById('console');
          var p = document.createElement('p');
          p.innerHTML = message;
          consoleDiv.appendChild(p);
          oldConsoleLog.apply(console, arguments);
        };
        
      })();
      