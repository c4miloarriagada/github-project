const { Router } = require('express');
const { route } = require('../controllers/api');

const router =  Router();



router.post('/', route)


module.exports = router;