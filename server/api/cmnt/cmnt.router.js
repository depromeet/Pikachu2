const express = require('express');
const router = express.Router();

const ctrl = require('./cmnt.ctrl.js');

router.get('/', ctrl.getCmnts);

module.exports = router;
