const { Schema, model } = require("mongoose");

const OwnerSchema = Schema({
  login: {
    type: String
  },
  avatar_url: {
    type: String
  },
  html_url: {
    type: String
  }

});

OwnerSchema.methods.toJSON = function () {
  const { ...data } = this.toObject();
  return data;
};


module.exports = model("Owner", OwnerSchema);
