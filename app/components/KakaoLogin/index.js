import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';

const LoginButton = styled.button`
  margin: 5px 0;
  height: 40px;
  background: #FEE934;
  color:#463434;
  border: 1px solid #F0E01D;
`;

class KakaoLogin extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    const { jsKey } = this.props;

    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;

      js = d.createElement(s);
      js.id = id;
      js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'kakao-sdk', () => {
      Kakao.init(jsKey); // eslint-disable-line no-undef
    });
  }

  onBtnClick() {
    const { getProfile, onSuccess, onFailure } = this.props;

    Kakao && Kakao.Auth.login({  // eslint-disable-line no-undef, no-unused-expressions
      success: (response) => {
        if (getProfile) {
          Kakao.API.request({ // eslint-disable-line no-undef
            url: '/v1/user/me',
            success: (profile) => {
              const result = { response, profile };
              onSuccess(result);
            },
            fail: (error) => {
              onFailure(error);
            },
          });
        } else {
          onSuccess({ response });
        }
      },
      fail: onFailure,
    });
  }

  render() {
    const { buttonComponent, buttonText, children } = this.props;

    return (
      <LoginButton
        onClick={this.onBtnClick}
      >
        {buttonComponent || children || buttonText}
      </LoginButton>
    );
  }
}

KakaoLogin.propTypes = {
  jsKey: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  buttonComponent: PropTypes.element,
  buttonText: PropTypes.string,
  getProfile: PropTypes.bool,
  children: React.PropTypes.node,
};

KakaoLogin.defaultProps = {
  buttonText: 'Login with Kakao',
};

export default KakaoLogin;
