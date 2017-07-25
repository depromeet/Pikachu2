
import React from 'react';
import styled from 'styled-components';
import MUNHeader from './MUNHeader';
import MUNHeaderTab from './MUNHeaderTab';
import MUNOrderTab from './MUNOrderTab';

const MeetUpNaviWrapper = styled.div`
  display:flex;
  flex-direction: column;
  float:right;
  width: 300px;
  background: #F0F0F0;
  border: none;
  z-index:5;
  padding-right:2px;
  box-shadow: 5px 5px 10px #cccccc;
`;

class MeetUpNavi extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MeetUpNaviWrapper >
        <MUNHeader>
          <MUNHeaderTab>모 임</MUNHeaderTab>
          <MUNHeaderTab>그 룹</MUNHeaderTab>
        </MUNHeader>
        <MUNOrderTab>fff</MUNOrderTab>
      </MeetUpNaviWrapper>
    );
  }
}

export default MeetUpNavi;
