module.exports.routes = {
  '/': {view: 'pages/homepage'},
  '/Admin': {view: 'pages/admin'},
  '/edit': {view: 'pages/edit'},
  '/pedidos': {view: 'pages/pedidos'},
  'POST /login': {controller: 'UserController', action: 'login'},
  '/logout': {controller: 'UserController', action: 'logout'},
  'POST /new_user': {controller: 'UserController', action: 'new'},
  'POST /User_find': {controller: 'UserController', action: 'User_find'},
};
