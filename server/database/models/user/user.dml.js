const q = require('../../queryExcute');
const query = require('./user.query');

exports.getUserById = (data) => q.selectOne(query.select.selectUserById, data.cond.id);
exports.getUserByEmail = (data) => q.selectOne(query.select.selectUserByEmail, data.cond.email);
