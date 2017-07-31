exports.postSocialLogin = (req, res) => {
  // req.assert('email', 'Email is not valid').isEmail();

  console.log(req.body);
  res.send({
    test: 'test',
  });
};
