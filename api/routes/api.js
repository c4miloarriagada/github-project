const { Router } = require('express');
const { firstLoad } = require('../controllers/api');
const { authenticator, validation }  = require('../middleware/authenticator')


const router =  Router();



router.post('/',[authenticator, validation] ,firstLoad)


module.exports = router;