module.exports = {
  select: {
    selectUserById: `
      SELECT * FROM TB_USER_INFO WHERE USE_YN = 'Y' AND USER_NO=?
    `,
    selectUserByEmail: `
      SELECT * FROM TB_USER_INFO WHERE USE_YN = 'Y' AND USER_EMAIL=?
    `,
  },
  insert: {

  },
};
