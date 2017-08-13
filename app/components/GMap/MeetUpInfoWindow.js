/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  width: 350px;
  height: 200px;
  background: red;
`;

class MeetUpInfoWindow extends Component {
  
  render() {
    return (
      <Root>
        <p>근데 왜 글씨는 안보이냐?오 보이군</p>
      </Root>
    );
  }
}

export default MeetUpInfoWindow;
