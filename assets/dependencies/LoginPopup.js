// ---------
// LOGIN
// ---------

var btnOpenLoginPopup = document.getElementById('btn-Open-login'),
    overlay_login = document.getElementById('login-overlay'),
    popup_login = document.getElementById('login-popup'),
    btnCancelLoginPopup = document.getElementById('btn-cancel-login'),
    errorLoginUser = document.getElementById('error-login-user'),
    menu = document.getElementById('menu_conteiner'),
    formLoginUser = document.getElementById('form-login-user');

btnOpenLoginPopup.addEventListener("click", function () {
  overlay_login.classList.add('active');
  popup_login.classList.add('active');
});

btnCancelLoginPopup.addEventListener("click", function () {
  overlay_login.classList.remove('active');
  popup_login.classList.remove('active');
});

formLoginUser.addEventListener('submit', async (e) => {
  e.preventDefault();
  let url = '/login';
  let values = Object.values(formLoginUser).reduce((obj,field) => {obj[field.name] = field.value; return obj}, {});

  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(values),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  if (response.status != 200) {
      let jsonResponse = await response.json();
      errorLoginUser.textContent = jsonResponse.error;
    }else{
      window.location.href = '/';
    }
});
