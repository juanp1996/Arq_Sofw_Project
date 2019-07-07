/**
 * Pedidos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  FoodRequired:{
    collection: 'menu' ,
    via : 'requiredBy' ,
  },
  CustomerName:{
    type:"string",
  },
  price:{
    type:"number",
  },
  state:{
    type: "number",
  }

  },

};

