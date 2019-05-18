/**
 * NewUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
//  */

module.exports = {
  new: async function (req , res) {
      let userID = req.param('user_name');
      let user_name = req.param('name');
      let user_lastname = req.param('lastname');
      let user_pass = req.param('user_pass');
      let pass_confirmation = req.param('confirmation')
      let hierarchy = req.param('hierarchy');
        if (user_pass !== pass_confirmation) {
            res.send("Pone bien las contraseñas tarado");
        }else{
          let check = await User.findOne({user_name : userID});
          if(!check){
            await User.createEach([{
              user_name: userID,
              user_pass: user_pass,
              name: user_name,
              lastname: user_lastname,
              hierarchy: hierarchy
            },]);
            res.data.valueOf(1);
            res.redirect('/');
            }else{
            res.send("El usuario ya existe");
        }
        }

  },


};

