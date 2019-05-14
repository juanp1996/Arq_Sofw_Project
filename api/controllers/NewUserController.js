/**
 * NewUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
//  */

module.exports = {
//
//   inputs:{
//     user_name:{
//       type:"string",
//       required: true,
//       unique: true,
//     },
//     user_pass:{
//       type: "string",
//       required: true,
//     },
//     confirmation:{
//       type:"string",
//       required: true,
//     },
//     name:{
//       type:"string",
//       required: true,
//     },
//     lastname:{
//       type: "string",
//       required: true,
//     },
//     hierarchy:{
//       type: "number",
//       required: true,
//     },
//   },
//   exit: {
//     created: {
//       description: 'Created',
//       responseType: 'created'
//     },
//     badRequest:{
//       description: 'Invalid data',
//       responseType: 'badRequest',
//     },
//   },
//
//   fn: async function create(inputs , exit){
//     if (inputs.user_pass !== inputs.confirmation ) {
//       return exit.badRequest({errors: ['Contraseñas distintas']});
//     }
//     try {
//       const user = await User.create(inputs);
//       return exit.created(user);
//     }catch(error){
//       return exit.badRequest(error);
//     }
//   },
  //
  fn: function (req , res) {
    let userID = req.param('user_name');
    let user_name = req.param('name');
    let user_lastname = req.param('lastname');
    let user_pass = req.param('user_pass');
    let pass_confirmation = req.param('confirmation')
    let hierarchy = req.param('hierarchy');
          if (user_pass === pass_confirmation) {
            create.user({user_name:userID, name:user_name, lastname:user_lastname, user_pass:user_pass, hierarchy: hierarchy});
        res.send("Se creo usuario");
      }else {
        res.send("Pone bien las contraseñas tarado");
      };

  },


};

