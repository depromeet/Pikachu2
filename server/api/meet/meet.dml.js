const q = require('../../database/queryExcute');
const query = require('./meet.query');

exports.getMeetUpInfos = (data) => {
  const param = [data.cond.userNo];

  if (data.cond.cmntNo) {
    param.push(data.cond.cmntNo);
  }

  return q.selectList( // 동적쿼리 생성
    query.select.meetUpInfos.replace(/{CMNT_NO}/g, (data.cond.cmntNo && 'WHERE CRTE_CMNT_NO=?') || ''),
    param,
  );
};
