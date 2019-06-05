module.exports.routes = {
  '/': {view: 'pages/homepage'},
  '/Admin': {view: 'pages/admin'},
  '/edit': {view: 'pages/edit'},
  '/pedidos': {view: 'pages/pedidos'},
  '/logout': {controller: 'UserController', action: 'logout'},
  'POST /login': {controller: 'UserController', action: 'login'},
  'POST /new_user': {controller: 'UserController', action: 'new'},
  'POST /User_list': {controller: 'UserController', action: 'User_list'},
  'POST /new_food_type': {controller: 'MenuController', action: 'new_food_type'},
  'POST /type_list': {controller: 'MenuController', action: 'type_list'},
};
