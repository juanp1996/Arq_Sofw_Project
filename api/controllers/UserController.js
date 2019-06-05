/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req, res) {
    let user = req.body.user_name;
    let pass = req.body.user_pass;
    console.log({user, pass});

    let user_c = await User.findOne({user_name: user, user_pass: pass});
    if (!user_c) {
      res.status(400).send({error: "Usuario o contraseña invalidos"});
    } else {
      req.session.user = user_c;
      res.redirect('/');
    }
  },

  logout: async function (req, res) {
    delete req.session.user;
    res.redirect('/');
  },

  new: async function (req , res) {
    let userID = req.body.user_name;
    let user_name = req.body.name;
    let user_lastname = req.body.lastname;
    let user_pass = req.body.user_pass;
    let pass_confirmation = req.body.confirmation;
    let hierarchy = req.body.hierarchy;
    if (user_pass !== pass_confirmation) {  //Controla si las contraseñas coinciden
      res.status(300).send({error: "Las contraseñas no coinciden"});
    }else{
      let check = await User.findOne({user_name : userID}); //Controla si el nombre de usuario esta en uso
      if(!check){             // si el nombre esta disponible crea el usuario
        await User.createEach([{
          user_name: userID,
          user_pass: user_pass,
          name: user_name,
          lastname: user_lastname,
          hierarchy: hierarchy
        },]);
        res.status(200).send({success: "El usuario se ha creado con exito."});
      }else{
        res.status(400).send({error: "El usuario ya existe"});
      }
    }
  },
  User_list: async function(req , res){
    let list = await User.find({});
    res.send({list:list});
  },

};

