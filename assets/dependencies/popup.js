// ---------
// CREATE
// ---------
var btnOpenCreatePopup = document.getElementById('btn-new-user'),
    overlay_create = document.getElementById('create-overlay'),
    popup_create = document.getElementById('create-popup'),
    btnCancelCreatePopup = document.getElementById('btn-cancel-create');

btnOpenCreatePopup.addEventListener("click", function () {
  overlay_create.classList.add('active');
  popup_create.classList.add('active');
});

btnCancelCreatePopup.addEventListener("click", function () {
  overlay_create.classList.remove('active');
  popup_create.classList.remove('active');
});

