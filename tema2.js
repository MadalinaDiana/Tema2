var i = 0; 
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0; //de la ce numar sa inceapa incarcarea
    var id = setInterval(frame, 50); //setarea timpului
    function frame() { 
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%"; 
      }
    }
  }
}
