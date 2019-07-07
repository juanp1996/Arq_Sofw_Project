var start_pedido= document.getElementById('btn_bckg_acept');

start_pedido.addEventListener("click" , async (e)=>{
  e.preventDefault()
  let url = "/menu/new";
  let settings = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json',}
  };
  let response = await fetch(url, settings);
  if (response.status = 200 ){
    console.log(response.id);
  }
});
