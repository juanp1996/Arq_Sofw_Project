var btnOpenDeletePopup = document.getElementById('btn-OpenDelete-user'),
    overlay_delete = document.getElementById('delete-user-overlay'),
    popup_delete = document.getElementById('delete-user-popup'),
    btnCancelDeletePopup = document.getElementById('btn-cancelar-delete'),
    userlist = document.getElementById('user-list'),
    formdeleteUser = document.getElementById('form-delete-user'),
    succes_delete_user_overlay = document.getElementById('Success-delete-overlay'),
    succes_delete_user_popup = document.getElementById('Success-delete-popup'),
    btn_acceptar_succes_delete = document.getElementById('btn-delete-aceptar'),
    msg_delete_user = document.getElementById('delete_user_msg');

btnCancelDeletePopup.addEventListener("click", function ()  {
  overlay_delete.classList.remove('active');
  popup_delete.classList.remove('active');
});

btnOpenDeletePopup.addEventListener("click", async (e) => {
    overlay_delete.classList.add('active');
    popup_delete.classList.add('active');
    e.preventDefault();
    let url = '/User_list';
    let settings = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json',}
    };
    let response = await fetch(url , settings);
    let jsonResponse = await response.json();
    jsonResponse.list.forEach((user) => {
      let username = user.name;
      let userID = user.id;
      let listItem = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.setAttribute('type', 'checkbox')
      checkbox.setAttribute('value', userID);
      listItem.appendChild(checkbox);
      listItem.appendChild(document.createElement('span').appendChild(document.createTextNode(username)));
      userlist.appendChild(listItem);
      });
});
formdeleteUser.addEventListener("submit" , async (e) => {
  e.preventDefault();
  let url = '/Delete_user';
  let values = Object.values(formdeleteUser).reduce((obj,field) => {
    if (field.type == 'checkbox' && field.checked) {
      obj[field.name] = field.value;
    }
    return obj
  }, {});
  console.log(values);
  let response = await fetch(url, {method: 'POST', body: JSON.stringify(values), headers:{'Content-Type': 'application/json'}});
  if (response.status != 200) {
      let jsonResponse = await response.json();msg_delete_user.textContent = jsonResponse.error;
  }else{
    succes_delete_user_overlay.classList.add('active');
    succes_delete_user_popup.classList.add('active');
    overlay_delete.classList.remove('active');
    popup_delete.classList.remove('active');
  }
});
btn_acceptar_succes_delete.addEventListener('click' , function () {
  succes_delete_user_popup.classList.remove('active');
  succes_delete_user_overlay.classList.remove('active');
});
