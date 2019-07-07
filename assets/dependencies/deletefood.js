var btnOpenDeleteFoodPopup = document.getElementById('food-delete-btn'),
  overlay_delete_food = document.getElementById('delete-food-overlay'),
  popup_delete_food = document.getElementById('delete-food-popup'),
  btnCancelDeleteFoodPopup = document.getElementById('btn-cancelar-delete-food'),
  foodlist = document.getElementById('food-list'),
  btn_aceptar_delete_food = document.getElementById('btn-aceptar-delete-food'),
  formdeleteFood = document.getElementById('form-delete-food'),
  succes_delete_food_overlay = document.getElementById('Success-delete-food-overlay'),
  succes_delete_food_popup = document.getElementById('Success-delete-food-popup'),
  btn_acceptar_succes_delete_food = document.getElementById('btn-delete-food-aceptar'),
  msg_delete_food = document.getElementById('delete_food_msg');

btnCancelDeleteFoodPopup.addEventListener("click", function ()  {
  overlay_delete_food.classList.remove('active');
  popup_delete_food.classList.remove('active');
  succes_delete_food_popup.classList.remove('active');
  succes_delete_food_overlay.classList.remove('active');
  while (foodlist.firstChild){
    foodlist.removeChild(foodlist.firstChild)
  }
});

btnOpenDeleteFoodPopup.addEventListener("click", async (e) => {
  overlay_delete_food.classList.add('active');
  popup_delete_food.classList.add('active');
  e.preventDefault();
  let url = '/food_list';
  let settings = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json',}
  };
  let response = await fetch(url , settings);
  let jsonResponse = await response.json();
  jsonResponse.foodlist.forEach((menu) => {
    let menuname = menu.name;
    let menuID = menu.id;
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('value', menuID);
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createElement('span').appendChild(document.createTextNode(menuname)));
    foodlist.appendChild(listItem);
  });
});
btn_aceptar_delete_food.addEventListener("click" , async (e) => {
  e.preventDefault();
  let url = '/Delete_food';
  let values = [];
  for(let field of Object.values(formdeleteFood)) {
    if (field.type == 'checkbox' && field.checked) {
      values.push(field.value);
    }
  }
  console.log(JSON.stringify(values));
  let response = await fetch(url, {method: 'POST', body: JSON.stringify(values), headers:{'Content-Type': 'application/json'}});
  if (response.status != 200) {
    let jsonResponse = await response.json();
    msg_delete_food.textContent = jsonResponse.error;
  }
  if (response.status == 200) {
    succes_delete_food_overlay.classList.add('active');
    succes_delete_food_popup.classList.add('active');
    overlay_delete_food.classList.remove('active');
    popup_delete_food.classList.remove('active');
  }
});
btn_acceptar_succes_delete_food.addEventListener('click' , function () {
  succes_delete_food_popup.classList.remove('active');
  succes_delete_food_overlay.classList.remove('active');
  while (foodlist.firstChild){
    foodlist.removeChild(foodlist.firstChild)
  }
});
