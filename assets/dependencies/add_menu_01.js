var menu_form_overlay = document.getElementById('menu_add_form_overlay'),
    menu_form_popup = document.getElementById('menu_add_form_popup'),
    btn_create_new_menu_02 = document.getElementById('add_menu_01'),
btn_cancel_new_menu = document.getElementById('btn_cancel_new_menu');

btn_create_new_menu_02.addEventListener("click" , function () {
  menu_form_overlay.classList.add('active');
  menu_form_popup.classList.add('active');
});
btn_cancel_new_menu.addEventListener("click" , function () {
  menu_form_overlay.classList.remove('active');
  menu_form_popup.classList.remove('active');
});
