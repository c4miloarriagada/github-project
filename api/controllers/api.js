const { response } = require("express");
const {octokit, login} = require('../helpers/loginGithub')
const  GithubSchema  = require("../models/github")



const route = async(req, res = response) => {


     const repos =  await octokit.request('GET /user/repos', {})

    console.log(repos)




};

const axios = require('axios');
const apiRequest = () =>{
  return axios.get('http://localhost:8080/api')
  .then(res => res).catch(error => console.log(error))
}

apiRequest()



module.exports = {
    route
}