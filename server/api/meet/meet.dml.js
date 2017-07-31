const q = require('../../database/queryExcute');
const query = require('./meet.query');

exports.getMeetUpInfos = (data) => q.selectList(query.select.meetUpInfos, data.cond.userNo);
