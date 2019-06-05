var   select = document.getElementById('product_type'),
      btn_cancel_new_food_type = document.getElementById('btn_cancel_new_food_type'),
      newfoodtypePopup = document.getElementById('new_food_type_popup'),
      newfoodtypeconteiner = document.getElementById('new_food_type_conteiner'),
      menu_form_popup = document.getElementById('menu_add_form_popup'),
      NewFoodTypeForm = document.getElementById('new-food-type-form'),
      errorNewType = document.getElementById('error-new-food-type');


        select.addEventListener("change" , function () {
          if (select.value == 1000) {
            newfoodtypeconteiner.classList.add('active');
            newfoodtypePopup.classList.add('active');
            menu_form_popup.classList.remove('active');

          }
        });

        btn_cancel_new_food_type.addEventListener("click" , function () {
          newfoodtypePopup.classList.remove('active');
          newfoodtypeconteiner.classList.remove('active');
          menu_form_popup.classList.add('active');
        });

        NewFoodTypeForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          let url = '/new_food_type';
          let elements = document.getElementById('new-food-type-form').elements;
          let value = [...elements].map((e) => e.value)[0];
          let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              'new_food_type_name': value
            }),
            headers:{'Content-Type': 'application/json'}
          });
          if (response.status != 200) {
              let jsonResponse = await response.json();
              errorNewType.textContent = jsonResponse.error;
            }else{
            newfoodtypePopup.classList.remove('active');
            newfoodtypeconteiner.classList.remove('active');
            menu_form_popup.classList.add('active');
          }
        });

