const { validationResult } = require("express-validator");
const OwnerSchema = require("../models/ownerInfo");


const authenticator = async(req, res, next) => {
try {
    
    

    const { _id } = req.body


    if (!_id) {
        
        throw new Error('Error no credentials')
    }

    const user =  await OwnerSchema.findById({ _id })

    if(!user) {
        throw new Error (`The id ${_id} doesnt exists`)
    }

    next()

} catch (error) {
    console.log(error)
    res.status(500).json({error})
}
}


const validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};


module.exports = {
    authenticator,
    validation
}