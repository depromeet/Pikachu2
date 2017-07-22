/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

// react root 밑에 바로 들어가는 컴포넌트
const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  width:100%;
  padding: 0;
  flex-direction: column;

`;
// Helmet이 뭔지좀 봐야할듯 ..
export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - 어서오세요"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: '피카츄 모임이 쉬워진다. 각종 모임 만남 서비스' },
        ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
