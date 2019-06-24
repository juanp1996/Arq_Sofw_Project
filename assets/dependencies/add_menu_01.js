var menu_form_overlay = document.getElementById('menu_add_form_overlay'),
    menu_form_popup = document.getElementById('menu_add_form_popup'),
    btn_create_new_menu_01 = document.getElementById('add_menu_01'),
    btn_agregar_menu = document.getElementById('btn-agregar-menu'),
    formCreateFood = document.getElementById('form-create-food'),
    errorNewFood = document.getElementById('error-new-food'),
    success_creation = document.getElementById('success-food-create'),
    success_creation_overlay = document.getElementById('success-food-create-overlay'),
    btn_create_other = document.getElementById('btn-Create-other'),
    btn_cancel_new_menu = document.getElementById('btn_cancel_new_menu'),
    btn_cancel_new_menu_1 = document.getElementById('btn_cancel_new_menu_1');


btn_create_new_menu_01.addEventListener("click" ,async (e) => {
  menu_form_overlay.classList.add('active');
  menu_form_popup.classList.add('active');
  e.preventDefault();
  let url = '/type_list';
  let settings = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json',}
  };
  let response = await fetch(url , settings);
  let jsonResponse = await response.json();
  selec_type_list.innerHTML = '<option value="" id="food-type-option"></option>\n' +
    '<option value="1000">Agregar un nuevo tipo...</option>';
  console.log(jsonResponse);
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
});
btn_cancel_new_menu_1.addEventListener("click" , function () {
  menu_form_overlay.classList.remove('active');
  success_creation.classList.remove('active');
  success_creation_overlay.classList.remove('active');
});
btn_agregar_menu.addEventListener("click" , async (e)=> {
  e.preventDefault();
  let url = '/new_food';
  let values = Object.values(formCreateFood).reduce((obj,field) => {
      obj[field.name] = field.value;
      return obj
  }, {});
  console.log(values);
  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(values),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  if (response.status != 200) {
    if (response.status == 400) {
      let jsonResponse = await response.json();
      errorNewFood.textContent = jsonResponse.error;
    }
  }else{
    success_creation.classList.add('active');
    success_creation_overlay.classList.add('active');
    menu_form_popup.classList.remove('active');
    formCreateFood.reset();
    errorNewFood.textContent = "";
  }
});
btn_create_other.addEventListener("click", function () {
  success_creation.classList.remove('active');
  success_creation_overlay.classList.remove('active');
  menu_form_popup.classList.add('active');
});
