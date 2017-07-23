import React, { PropTypes } from 'react';
import styled from 'styled-components';
import objectToParams from './objectToParams';

const LoginButton = styled.button`
  margin: 5px 0;
  height: 40px;
  background: #4267b2;
  color: #fff;
  border: 1px solid #3C5DB6;
`;


const getIsMobile = () => {
  let isMobile = false;

  try {
    isMobile = !!((window.navigator && window.navigator.standalone) || navigator.userAgent.match('CriOS') || navigator.userAgent.match(/mobile/i));
  } catch (ex) {
    // continue regardless of error
  }

  return isMobile;
};

class FacebookLogin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    isDisabled: PropTypes.bool,
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    cookie: PropTypes.bool,
    reAuthenticate: PropTypes.bool,
    scope: PropTypes.string,
    redirectUri: PropTypes.string,
    autoLoad: PropTypes.bool,
    disableMobileRedirect: PropTypes.bool,
    isMobile: PropTypes.bool,
    fields: PropTypes.string,
    version: PropTypes.string,
    language: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
  };
  static defaultProps = {
    buttonText: 'Facebook으로 로그인',
    redirectUri: typeof window !== 'undefined' ? window.location.href : '/',
    scope: 'public_profile,email',
    xfbml: false,
    cookie: false,
    reAuthenticate: false,
    version: '2.8',
    language: 'es_US',
    disableMobileRedirect: false,
    isMobile: getIsMobile(),
    tag: 'button',
  }

  state = {
    isSdkLoaded: false,
    isProcessing: false,
  };

  componentDidMount() {
    this._isMounted = true; // eslint-disable-line no-underscore-dangle
    // facebook sdk가 로딩이 되어져있으면 sdk가 로딩이 되었다는 안내를 해줘야 한다.
    if (document.getElementById('facebook-jssdk')) {
      this.sdkLoaded();
      return;
    }

    this.setFbAsyncInit();
    this.loadSdkAsynchronously();
    let fbRoot = document.getElementById('fb-root');
    if (!fbRoot) {
      fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }
  }

  componentWillUnmount() {
    this._isMounted = false; // eslint-disable-line no-underscore-dangle
  }

  setFbAsyncInit() {
    const { appId, xfbml, cookie, version, autoLoad } = this.props;
    window.fbAsyncInit = () => {
      window.FB.init({
        version: `v${version}`,
        appId,
        xfbml,
        cookie,
      });
      this.setStateIfMounted({ isSdkLoaded: true });
      if (autoLoad || window.location.search.includes('facebookdirect')) {
        window.FB.getLoginStatus(this.checkLoginAfterRefresh);
      }
    };
  }

  setStateIfMounted(state) {
    if (this._isMounted) { // eslint-disable-line no-underscore-dangle
      this.setState(state);
    }
  }

  sdkLoaded() {
    this.setState({ isSdkLoaded: true });
  }

  loadSdkAsynchronously() {
    const { language } = this.props;
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = `https://connect.facebook.net/${language}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  responseApi = (authResponse) => {
    window.FB.api('/me', { locale: this.props.language, fields: this.props.fields }, (me) => {
      Object.assign(me, authResponse);
      this.props.callback(me);
    });
  };

  checkLoginState = (response) => {
    this.setStateIfMounted({ isProcessing: false });
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else if (this.props.callback) {
      this.props.callback({ status: response.status });
    }
  };

  checkLoginAfterRefresh = (response) => {
    if (response.status === 'connected') {
      this.checkLoginState(response);
    } else {
      window.FB.login((loginResponse) => this.checkLoginState(loginResponse), true);
    }
  };

  click = (e) => {
    if (!this.state.isSdkLoaded || this.state.isProcessing || this.props.isDisabled) {
      return;
    }
    this.setState({ isProcessing: true });
    const { scope, appId, onClick, reAuthenticate, redirectUri, disableMobileRedirect } = this.props;

    if (typeof onClick === 'function') {
      onClick(e);
      if (e.defaultPrevented) {
        return;
      }
    }

    const params = {
      client_id: appId,
      redirect_uri: redirectUri,
      state: 'facebookdirect',
      scope,
    };

    if (reAuthenticate) {
      params.auth_type = 'reauthenticate';
    }

    if (this.props.isMobile && !disableMobileRedirect) {
      window.location.href = `//www.facebook.com/dialog/oauth?${objectToParams(params)}`;
    } else {
      window.FB.login(this.checkLoginState, { scope, auth_type: params.auth_type });
    }
  };

  render() {
    return (
      <LoginButton
        onClick={this.click}
      >
        {this.props.children}
      </LoginButton>
    );
  }
}

export default FacebookLogin;
