// ---------
// LOGIN
// ---------

var btnOpenLoginPopup = document.getElementById('btn-Open-login'),
  overlay_login = document.getElementById('login-overlay'),
  popup_login = document.getElementById('login-popup'),
  btnCancelLoginPopup = document.getElementById('btn-cancel-login');

btnOpenLoginPopup.addEventListener("click", function () {
  overlay_login.classList.add('active');
  popup_login.classList.add('active');
});

btnCancelLoginPopup.addEventListener("click", function () {
  overlay_login.classList.remove('active');
  popup_login.classList.remove('active');
});
