/**
 * PedidosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  Update_cant_p: async function (req, res) {
    let id = req.body.id;
    sails.log("sumar controller");
    let food = await Menu.findOne({id: id});
    let cantidad = food.cant + 1;
    await Menu.update({id: id}).set({cant: cantidad})
    res.status(200).send({food: food})
  },
  Update_cant_m: async function (req, res) {
    let id = req.body.id;
    sails.log("restar controller");
    let food = await Menu.findOne({id: id});
    if (food.cant > 0) {
      let cantidad = food.cant - 1;
      await Menu.update({id: id}).set({cant: cantidad})
      res.status(200).send({food: food})
    }
    res.status(200).send()
  },
  new: async function (req, res) {
    sails.log("new");
    let precio = 0;
    let sta = 0;
    let customer = "";
    let newfood = await Pedido.createEach([{
      price: precio,
      state: sta,
      CustomerName: customer,
    },]);
    res.status(200).send({newfood : newfood})
  },



};
