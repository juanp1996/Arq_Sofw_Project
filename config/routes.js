module.exports.routes = {
  '/': {view: 'pages/homepage'},
  '/homepageAdmin': {view: 'pages/homepageAdmin'},
  '/homepageEmployed': {view: 'pages/homepageEmployed'},
  '/Admin': {view: 'pages/admin'},
  '/edit': {view: 'pages/edit'},
  '/pedidos': {view: 'pages/pedidos'},
  '/new_user': {view: 'pages/new_user'},
  'GET /login': {view: 'pages/login'},
  'POST /login': {controller: 'UserController', action: 'login'},
};
