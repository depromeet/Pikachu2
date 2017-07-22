import React from 'react';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import A from './A';
import Profile from './Profile';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Container from './Container';
import Menu from './Menu';
import Noop from './Noop';
import Logo from './Logo';

const HeaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  height: 57px;
  width:100%;
  padding: 0;
  border-bottom: 1px solid #999;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <Logo>PIKACHU</Logo>
          <NavBar>
            <Noop />
            <Menu>item1</Menu>
            <Menu>item2</Menu>
            <Menu>item3</Menu>
            <Profile src={'https://graph.facebook.com/1920309008233737/picture?type=large'}></Profile>
          </NavBar>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;
