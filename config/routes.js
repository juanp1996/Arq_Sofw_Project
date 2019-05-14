module.exports.routes = {
  '/': {view: 'pages/homepage'},
  '/Admin': {view: 'pages/admin'},
  '/edit': {view: 'pages/edit'},
  '/pedidos': {view: 'pages/pedidos'},
  'GET /new_user': {view: 'pages/new_user'},
  'POST /new_user': {controller: 'NewUserController', action: 'fn'},
  'GET /login': {view: 'pages/login'},
  'POST /login': {controller: 'UserController', action: 'login'},
  '/logout': {controller: 'LogoutController', action: 'logout'},

};
