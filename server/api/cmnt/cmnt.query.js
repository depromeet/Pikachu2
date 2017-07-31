module.exports = {
  select: {
    cmntList: `
      SELECT
        T_C.CMNT_NO,
          CMNT_NM,
          CMNT_DESC,
          IFNULL(CMNT_THUMBNAIL,'') CMNT_THUMBNAIL
      FROM (
        SELECT * FROM TB_JOIN_CMNT
        WHERE TB_JOIN_CMNT.USER_NO = ? AND APPROVAL_YN='Y'
      ) T_J
      INNER JOIN (
        SELECT *
          FROM TB_COMMUNITY
          WHERE USE_YN='Y'
      ) T_C
      ON T_J.CMNT_NO = T_C.CMNT_NO
    `,
  },
  insert: {

  },
};
