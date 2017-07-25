import React from 'react';

import styled from 'styled-components';
import Profile from './Profile';
import NavBar from './NavBar';
import Container from './Container';
import Noop from './Noop';
import HeaderLink from './HeaderLink';
import Logo from './Logo';
import LoginModal from '../LoginModal';

const HeaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  height: 57px;
  width:100%;
  padding: 0;
  background: #206DBB;
  color: #fff;
  border-bottom: 1px solid #999;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper >
        <Container>
          <Logo to={'/'}>PIKACHU</Logo>
          <NavBar>
            <Noop />
            <HeaderLink to={'/login'}>Login</HeaderLink>
            <Profile src={'//s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg'} alt={'profile'}></Profile>
          </NavBar>
          <LoginModal showModal={'true'} />
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;
