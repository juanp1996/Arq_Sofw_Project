var btnCloseBackg = document.getElementById('btn_bckg_acept'),
    overlay_bckg = document.getElementById('InitBackground'),
    menu = document.getElementById('menu_conteiner'),
    overlay_bckg_btn= document.getElementById('btn-bckg');
btnCloseBackg.addEventListener("click", function () {
  overlay_bckg.classList.add('active');
  overlay_bckg_btn.classList.add('active');
  menu.classList.add('active');
});
