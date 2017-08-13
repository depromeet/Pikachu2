const express = require('express');
const router = express.Router();

const ctrl = require('./user.ctrl.js');

router.get('/', ctrl.postSocialLogin);

module.exports = router;
