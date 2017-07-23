/* eslint-disable react/jsx-boolean-value */
import React from 'react';

import styled from 'styled-components';
import Container from './Container';
import FacebookLogin from '../FacebookLogin';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import LoginButton from './LoginButton';
import Separator from '../Separator';
import Label from './Label';
import Signup from './Signup';
import Input from '../Input';

const LoginModalWrapper = styled.div`
  position:fixed;
  z-index:1000;
  margin: 0 auto;
  display: flex;
  overflow: none;
  width:100%;
  min-height:100%;
  left:0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);

  -webkit-justify-content: center;
          justify-content: center;
`;

class LoginModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onKakaoLoginClick() {
  }

  onGoogleLoginClick() {
  }
  onSignupClick() {

  }
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    };

    return (
      <LoginModalWrapper tabindex={'-1'}>
        <Container>
          <FacebookLogin
            appId="1939408019672376"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
          >
            Facebook으로 로그인
          </FacebookLogin>
          <GoogleButton
            onClick={this.onGoogleLoginClick}
          >Google로 로그인</GoogleButton>
          <KakaoButton>KakaoTalk으로 로그인</KakaoButton>
          <Separator>or</Separator>
          <Input
            type={'text'}
            placeholder={'이메일 주소'}
            className={'email'}
          />
          <Input
            type={'password'}
            placeholder={'비밀번호'}
            className={'password'}
          />
          <Label>
            비밀번호를 잊으셨나요?
          </Label>
          <LoginButton>로그인</LoginButton>
          <Separator />
          <Signup onSignupClick={this.onSignupClick}></Signup>
        </Container>
      </LoginModalWrapper>
    );
  }
}

export default LoginModal;
