/**
 * MenuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  new_food: async function(req,res){
  let name = req.body.product_name;
  let price = req.body.product_price;
  let type = req.body.product_type;
  let description = req.body.product_description;
  let state = 1;
  let cant = 0;
  let type_model = await Food_type.findOne({name : type})
  let check = await Menu.findOne({name : name});
  if(!check){
      await Menu.createEach([{
        name: name,
        price: price,
        description: description,
        type: type_model.id,
        state: state,
        cant: cant,
      },]);
      res.status(200).send({success: ""});
    }else{
      res.status(400).send({error: "El plato ya existe"});
    }
  },

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
    let foodlist = await Menu.find({});
    res.send({list:list});
  },
  food_list: async function(req , res){
    let foodlist = await Menu.find({});
    res.send({foodlist:foodlist});
  },
  type_list_1: async function(req , res) {
    let list = await Food_type.find({});
    let foodlist = await Menu.find({});
    res.view('pages/homepage', {list:list , foodlist:foodlist});
  },
  Delete_food: async function(req , res){
    sails.log('entro al delete');
    let ids = req.body;
    await Menu.destroy({id : ids});
    res.json({err: 'none'});
  },
  pausar : async function(req , res){
    let id = req.body.id;
      await Menu.update({id: id}).set({state: 0});
      res.status(200).send()
  },
  reanudar : async function(req , res){
    let id = req.body.id;
    await Menu.update({id: id}).set({state: 1});
    res.status(200).send()
  }
};


