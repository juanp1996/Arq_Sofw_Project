var btnOpenDeletePopup = document.getElementById('btn-OpenDelete-user'),
    overlay_delete = document.getElementById('delete-user-overlay'),
    popup_delete = document.getElementById('delete-user-popup'),
    formDeleteUser = document.getElementById('form-delete-user'),
    btnCancelDeletePopup = document.getElementById('btn-cancelar-delete'),
    userlist = document.getElementById('user-list'),
    find_user_key = document.getElementById('find_user_name');

btnCancelDeletePopup.addEventListener("click", function ()  {
  overlay_delete.classList.remove('active');
  popup_delete.classList.remove('active');
});

btnOpenDeletePopup.addEventListener("click", function () {
    overlay_delete.classList.add('active');
    popup_delete.classList.add('active');
    find_user_key.addEventListener("keyup",async (e) => {
    e.preventDefault();
    let url = '/User_find';
    let values = Object.values(formDeleteUser).reduce((obj,field) => {obj[field.name] = field.value; return obj }, {});
    //console.log(values);
    let response = await fetch(url, {method: 'POST', body: JSON.stringify(values), headers:{'Content-Type': 'application/json'}});
    let jsonResponse = await response.json();
    jsonResponse.list.forEach((user) => {
      let username = user.name;
      let listItem = document.createElement('li');
      listItem.appendChild(document.createTextNode(username));
      userlist.appendChild(listItem);
    });
    // console.log(jsonResponse);
    // userlist.textContent = jsonResponse.list;

  })


});
