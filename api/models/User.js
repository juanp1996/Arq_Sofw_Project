module.exports = {

  attributes: {

      user_name:{
        type:"string",
        required: true,
        unique: true,
      },
      user_pass:{
        type: "string",
        required: true,
      },
      name:{
        type:"string",
        required: true,
      },
      lastname:{
        type: "string",
        required: true,
      },
      hierarchy:{
        type: "number",
        required: true,
      },
  },
};

