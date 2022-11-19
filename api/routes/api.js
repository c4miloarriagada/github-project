const { Router } = require('express');
const { route } = require('../controllers/api');

const router =  Router();



router.get('/', route)


module.exports = router;