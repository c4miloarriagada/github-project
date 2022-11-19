const { response } = require("express");
const axios = require("axios");
const { octokit } = require("../helpers/loginGithub");

const GithubSchema = require("../models/github");
const OwnerSchema = require("../models/ownerInfo");

const firstLoad = async (req, res = response) => {
  try {
    let repos = await octokit.request("GET /user/repos", {});

    let { data } = repos;

    let owner = data.map((e) => e.owner);

    owner = owner.filter((e) => e.login === "c4miloarriagada");

    let { login, avatar_url, html_url } = owner[0];

    await OwnerSchema.create({ login, avatar_url, html_url });

    data.forEach(
      async (e) =>
        await GithubSchema.create({
          repo: e.name,
          full_name: e.full_name,
          html_url: e.html_url,
          update_at: e.updated_at,
          language: e.language,
          description: e.description,
        })
    );

    return res.status(200).send(console.log('register added success'))
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};


const apiRequest = () => {

  return axios
    .post("http://localhost:8080/api",{
     _id: process.env.ID
    })
    .then((res) => res)
    .catch((error) => console.log(error));
};



apiRequest()


module.exports = {
  firstLoad,
};
