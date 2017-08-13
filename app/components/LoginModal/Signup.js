import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Label from './Label';

const SignupWrapper = styled.div`
  display: block;
  height: 34px;
`;
const LabelWrapper = styled.div`
  display: inline-block;
  padding: 4px;
`;
const SignupButton = styled.button`
  float: right;
  border: 1px solid #ededed;
  height: 34px;
  padding: 0 20px;
  color: #000;
`;

function Signup(props) {
  return (
    <SignupWrapper>
      <LabelWrapper>
        <Label>아직 계정이 없으신가요?</Label>
      </LabelWrapper>
      <SignupButton
        onClick={props.onSignupClick}
      >
      회원가입
      </SignupButton>
    </SignupWrapper>
  );
}

Signup.propTypes = {
  onSignupClick: PropTypes.func,
};
export default Signup;
