const dml = require('./user.dml');

// 공통 헤더에 jwt 토큰에 대한 결과값이 존재하면

exports.postSocialLogin = async (req, res) => {
  // req.assert('email', 'Email is not valid').isEmail();

  const result = await dml.selectDuplicateEmail({
    cond: {
      email: 'kane7274@naver.com',
    },
  });

  if (!result.count) { // 중복된 회원의 정보가 존재하는 경우
    console.log('asfladkjf');
  }

  // console.log(req.body);

  res.send({
    test: result,
  });
};
