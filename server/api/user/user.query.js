module.exports = {
  select: {
    selectDuplicateEmail: `
      SELECT COUNT(*) FROM TB_USER_INFO WHERE USE_YN='Y' AND USER_EMAIL=?;
    `,
  },
  insert: {

  },
};
