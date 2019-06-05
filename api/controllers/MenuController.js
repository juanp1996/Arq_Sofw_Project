/**
 * MenuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  new_food_type: async function(req ,res) {
    let name = req.body.new_food_type_name;
    let check = await Food_type.findOne({name: name});
    let value = await Food_type.count();
    if (!check) {
      await Food_type.createEach([{
        name: name,
        value: value,
      },]);
      res.status(200).send({success: 'exito'});
    } else {
      res.status(400).send({error: "El tipo ya existe"});
    }
  },

  type_list: async function(req , res) {
    let list = await Food_type.find({});
    res.send({list:list});
  },

};


