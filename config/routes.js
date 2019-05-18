module.exports.routes = {
  '/': {view: 'pages/homepage'},
  '/Admin': {view: 'pages/admin'},
  '/edit': {view: 'pages/edit'},
  '/pedidos': {view: 'pages/pedidos'},
  '/login': {controller: 'UserController', action: 'login'},
  '/logout': {controller: 'LogoutController', action: 'logout'},
  '/new_user': {controller: 'NewUserController', action: 'new'},

};
