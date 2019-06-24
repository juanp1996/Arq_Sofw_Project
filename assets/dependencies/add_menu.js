var BtnAceptADDmenu = document.getElementById('btn_bckg_acept'),
    menu_form_overlay = document.getElementById('menu_add_form_overlay'),
    menu_form_popup = document.getElementById('menu_add_form_popup'),
    menu = document.getElementById('menu_conteiner'),
    btn_create_new_menu_01 = document.getElementById('menu_add'),
    btn_cancel_new_menu = document.getElementById('btn_cancel_new_menu'),
    selec_type_list = document.getElementById('product_type');

BtnAceptADDmenu.addEventListener("click", function() {
  menu.classList.add('active');
});

btn_create_new_menu_01.addEventListener("click" ,async (e) => {
  menu_form_overlay.classList.add('active');
  menu_form_popup.classList.add('active');
  e.preventDefault();
  let url = '/type_list ';
  let settings = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json',}
  };
  let response = await fetch(url , settings);
  let jsonResponse = await response.json();
  selec_type_list.innerHTML = '<option value="" id="food-type-option"></option>\n' +
    '<option value="1000">Agregar un nuevo tipo...</option>';
    jsonResponse.list.forEach((food_type) => {
      let typelist = food_type.name;
      let listItem = document.createElement('option');
      listItem.appendChild(document.createTextNode(typelist));
      selec_type_list.appendChild(listItem);
    });
});

btn_cancel_new_menu.addEventListener("click" , function () {
  menu_form_overlay.classList.remove('active');
  menu_form_popup.classList.remove('active');
  while (selec_type_list.firstChild){
    selec_type_list.removeChild(selec_type_list.firstChild)
  }
});
