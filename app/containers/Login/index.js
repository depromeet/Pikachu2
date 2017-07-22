/*
 * Login
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import H1 from 'components/H1';

// react root 밑에 바로 들어가는 컴포넌트
const LoginWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  min-height: 100%;
  width:100%;
  padding: 0;
  flex-direction: column;

  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;

`;
export default class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <LoginWrapper>
        <Helmet
          title="피카츄"
          meta={[
            { name: 'description', content: '피카피카 로그인 페이지' },
          ]}
        />
        hello
      </LoginWrapper>
    );
  }
}
