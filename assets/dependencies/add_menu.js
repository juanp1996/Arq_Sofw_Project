var BtnAceptADDmenu = document.getElementById('btn_bckg_acept'),
    menu_form_overlay = document.getElementById('menu_add_form_overlay'),
    menu_form_popup = document.getElementById('menu_add_form_popup'),
    menu = document.getElementById('menu_conteiner'),
    btn_create_new_menu_01 = document.getElementById('menu_add'),
    btn_cancel_new_menu = document.getElementById('btn_cancel_new_menu');


BtnAceptADDmenu.addEventListener("click", function() {
  menu.classList.add('active');
});
btn_create_new_menu_01.addEventListener("click" , function () {
  menu_form_overlay.classList.add('active');
  menu_form_popup.classList.add('active');
});
btn_cancel_new_menu.addEventListener("click" , function () {
  menu_form_overlay.classList.remove('active');
  menu_form_popup.classList.remove('active');
});
