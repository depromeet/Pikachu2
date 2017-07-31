/* eslint-disable arrow-body-style */
// 통일성을 위한 disable처리
const q = require('../../database/queryExcute');
const query = require('./meet.query');

exports.getMeetUpInfos = (data) => {
  const param = [data.cond.userNo];

  if (data.cond.cmntNo) {
    param.push(data.cond.cmntNo);
  }

  // 동적쿼리 생성
  query.select.meetUpInfos = query.select.meetUpInfos
                            .replace(/{CMNT_NO}/g, (data.cond.cmntNo && 'WHERE CRTE_CMNT_NO=?') || '');

  return q.selectList(query.select.meetUpInfos, param);
};

exports.getMeetUsersInfo = (data) => {
  return q.selectList(query.select.meetUsersInfo, data.cond.meetNo);
};
