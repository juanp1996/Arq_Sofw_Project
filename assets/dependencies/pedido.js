

function cambiar(val) {
  var contador = document.getElementById('contador');
  if(val === 1 && contador < 0 ){
    contador.innerHTML = contador - 1;
  }else{
    contador.innerHTML = contador + 1;
  }
}
