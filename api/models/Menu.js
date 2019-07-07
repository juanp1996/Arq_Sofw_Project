/**
 * Menu.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{type:"string", required: true},
    price:{type:"number", required:true},
    description:{type:"text"},
    state:{type:"number"},
    type:{
      model: 'food_type'
    },
    requiredBy:{
      model: 'pedidos'
    },
    cant:{
      type: "number"
    },

  }

};



