const { response } = require("express");
const { octokit } = require("../helpers/loginGithub");
const { apiRequest } = require("../helpers/githubReposUpdate");

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

    return res.status(200).send(console.log("register added success"));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const updateRepos = async (req, res) => {
  try {
    GithubSchema.collection.drop();

    let repos = await octokit.request("GET /user/repos", {});

    let { data } = repos;

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

    return res.status(200).send(console.log("Update Successful"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const getReposData = async (req, res) => {
  try {
    const repos = await GithubSchema.find().sort({ update_at: "desc" });

    return res.status(200).json(repos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const getOwner = async (req, res) => {
  try {
    
    const user = await OwnerSchema.find();

    return res.status(200).json(user);

  } catch (error) {
    console.log(error)
    return res.status(500).json({error})
  }


};

module.exports = {
  firstLoad,
  updateRepos,
  getReposData,
  getOwner
};
