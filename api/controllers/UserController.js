/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req , res) {
    let user = req.param('user_name');
    let pass = req.param('user_pass');

    console.log({user, pass});

    let user_c = await User.findone({user_name: user , user_pass: pass});
      if(!user_c){
        res.send("Usuario o contraseña invalidos");
      }else
        res.send("hola mundo");
  }
};

