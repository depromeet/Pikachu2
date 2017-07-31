const express = require('express');
const router = express.Router();

const ctrl = require('./user.ctrl.js');

router.post('/', ctrl.postSocialLogin);

module.exports = router;
