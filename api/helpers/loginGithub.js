const { Octokit } = require("octokit");

const octokit = new Octokit({ auth: process.env.TOKEN });


const login = async() => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  return login
};

  

module.exports = {
    octokit,
    login
}  