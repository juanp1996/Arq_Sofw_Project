// ---------
// CREATE
// ---------
var btnOpenCreatePopup = document.getElementById('btn-new-user'),
    overlay_create = document.getElementById('create-overlay'),
    popup_create = document.getElementById('create-popup'),
    btnCancelCreatePopup = document.getElementById('btn-cancel-create'),
    formCreateUser = document.getElementById('form-create-user'),
    errorNewUser = document.getElementById('error-new-user'),
    overlay_succesNewUser = document.getElementById('Success-overlay'),
    popup_succesNewUser = document.getElementById('Success-popup'),
    btnAceptarSuccess = document.getElementById('btn-Success-aceptar');


btnOpenCreatePopup.addEventListener("click", function () {
  overlay_create.classList.add('active');
  popup_create.classList.add('active');
});
btnCancelCreatePopup.addEventListener("click", function () {
  overlay_create.classList.remove('active');
  popup_create.classList.remove('active');
});
btnAceptarSuccess.addEventListener("click", function () {
  overlay_succesNewUser.classList.remove('active');
  popup_succesNewUser.classList.remove('active');
});

formCreateUser.addEventListener('submit', async (e) => {
  e.preventDefault();
  let url = '/new_user';
  let values = Object.values(formCreateUser).reduce((obj,field) => {
    if (field.type == 'radio' && field.checked) {
      obj[field.name] = field.value;
    } else if (field.type != 'radio') {
      obj[field.name] = field.value;
    }
    return obj
  }, {});

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
      errorNewUser.textContent = jsonResponse.error;
    }else{
      let jsonResponse = await response.json();
      errorNewUser.textContent = jsonResponse.error;
    }
  }else{
    overlay_succesNewUser.classList.add('active');
    popup_succesNewUser.classList.add('active');
    overlay_create.classList.remove('active');
    popup_create.classList.remove('active');
  }
});
