const dml = require('./cmnt.dml');

exports.getCmnts = async (req, res) => {
  // req.assert('email', 'Email is not valid').isEmail();
  const result = await dml.getCmntList({
    cond: {
      userNo: 7,
    },
  });

  res.send({
    data: result,
    result: true,
  });
};
