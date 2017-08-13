const q = require('../../database/queryExcute');
const query = require('./cmnt.query');

exports.getCmntList = (data) => q.selectList(query.select.cmntList, data.cond.userNo);
