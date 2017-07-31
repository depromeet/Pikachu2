const dml = require('./meet.dml');

exports.getMeetupInfos = async (req, res) => {
  // req.assert('email', 'Email is not valid').isEmail();
  const result = await dml.getMeetUpInfos({
    cond: {
      userNo: 7,
    },
  });

  res.send({
    data: result,
    result: true,
  });
};

exports.getMeetupInfoByCmnt = async (req, res) => {
  // req.assert('email', 'Email is not valid').isEmail();
  const result = await dml.getMeetUpInfos({
    cond: {
      userNo: 7,
      cmntNo: req.params.cmntNo,
    },
  });
  console.log(result);
  res.send({
    data: result,
    result: true,
  });
};
