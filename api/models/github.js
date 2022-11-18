const { Schema, model } = require("mongoose");

const GithubSchema = Schema({
  repo: {
    type: String
  }
});

GithubSchema.methods.toJSON = function () {
  const { ...data } = this.toObject();
  return data;
};

module.exports = model("Github", GithubSchema);