const { Schema, model } = require("mongoose");

const GithubSchema = Schema({
  name: {
    type: String
  },
  full_name: {
    type: String
  },
  html_url: {
    type: String
  },
  update_at: {
    type: Date
  },
  language:{
    type: String
  },
  description: {
    type: String
  }

});

GithubSchema.methods.toJSON = function () {
  const { ...data } = this.toObject();
  return data;
};

module.exports = model("Github", GithubSchema);