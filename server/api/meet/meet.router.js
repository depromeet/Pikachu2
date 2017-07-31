const express = require('express');
const router = express.Router();

const ctrl = require('./meet.ctrl.js');

router.get('/', ctrl.getMeetupInfos);
router.get('/:cmntNo/', ctrl.getMeetupInfoByCmnt);

module.exports = router;
