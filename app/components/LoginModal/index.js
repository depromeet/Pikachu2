/* eslint-disable react/jsx-boolean-value */
import React from 'react';

import styled from 'styled-components';
// import ReactModal from 'react-modal'
import GoogleLogin from '../GoogleLogin'; // 'react-google-login';
import FacebookLogin from '../FacebookLogin';
import KakaoLogin from '../KakaoLogin';
import Container from './Container';
import LoginButton from './LoginButton';
import Separator from '../Separator';
import Label from './Label';
import Signup from './Signup';
import Input from '../Input';

const LoginModalWrapper = styled.div`
  position:fixed;
  z-index:1000;
  margin: 0 auto;
  display: ${(props) => props.showModal ? 'flex' : 'none'};
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
  state = {
    showModal: false,
  }
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
    const responseGoogle = (response) => {
      console.log(response);
    };

    const success = (response) => {
      console.log(response);
    };

    const failure = (error) => {
      console.log(error);
    };
    // showModal에 따라 달라진다.
    return (
      <LoginModalWrapper tabindex={'-1'} showModal={false}>
        <Container onClick={this.closeModal}>
          <FacebookLogin
            appId="1939408019672376"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
          >
            Facebook으로 로그인
          </FacebookLogin>
          <GoogleLogin
            clientId="363757123134-ilff0phacekcbf3m899mk25r6dr3b7n1.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          >
          Google로 로그인
          </GoogleLogin>
          <KakaoLogin
            jsKey="a71d049ed770a4d656a75f0ff537456f"
            onSuccess={success}
            onFailure={failure}
            getProfile={true}
          >
          KakaoTalk으로 로그인</KakaoLogin>
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
