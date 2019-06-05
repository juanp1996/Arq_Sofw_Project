var btnOpenDeletePopup = document.getElementById('btn-OpenDelete-user'),
    overlay_delete = document.getElementById('delete-user-overlay'),
    popup_delete = document.getElementById('delete-user-popup'),
    btnCancelDeletePopup = document.getElementById('btn-cancelar-delete'),
    userlist = document.getElementById('user-list');

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
      let listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(username));
      userlist.appendChild(listItem);
      });
  });

