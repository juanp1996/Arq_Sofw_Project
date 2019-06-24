/**
 * Food_type.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      name:{
        type: "string",
        required: true,
      },
      comidas:{
        collection: 'menu',
        via:'type',
      },
      image:{
        type: "string",
        // required: true
       },
  }
};

