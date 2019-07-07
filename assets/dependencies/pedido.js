let pedidos= {};

const sumar = (id) => {
  console.log("aaaa");
  if(typeof pedidos[id] == "undefined")
    pedidos[id] =1;
  else
    pedidos[id]++;
  let response = fetch('/menu/sumar' ,{ method:'POST', body : JSON.stringify({id})})
  if (response.status = 200){
  }
};

const restar = (id) => {
  pedidos[id]--;
  let response = fetch('/menu/restar' ,{ method:'POST', body : JSON.stringify({id})})
  if (response.status = 200){
  }
};
const CrearPedido = (food) =>{
  let response = fetch('/menu/new' ,{ method:'POST', body : JSON.stringify({id})})
};

const Pausar = (id) => {
  let response = fetch('/menu/pausar', {method: 'POST', body: JSON.stringify({id})})
  if (response.status = 200) {
  }
};
const Reanudar = (id) =>{
    let response = fetch('/menu/reanudar' ,{ method:'POST', body : JSON.stringify({id})})
    if (response.status = 200){
    }
};






// function cambiar(val) {
//   var el = document.getElementById('contador');
//   var contador = parseInt(el.innerText);
//   if(val === 0 && contador > 0 ){
//     el.innerHTML = contador - 1;
//   }
//   if(val ===1){
//     el.innerHTML = contador + 1;
//   }
// }

