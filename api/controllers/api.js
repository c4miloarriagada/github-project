const { response } = require("express");
const  GithubSchema  = require("../models/github")

const route = async(req, res = response) => {


    const { repo } = req.body

    try {
        const newRepo = await GithubSchema.create({repo}) 
      console.log(newRepo)
        res.status(200).json(newRepo);


    } catch (error) {
      console.log(error)
      res.status(500).json('Error')
    }


};





module.exports = {
    route
}