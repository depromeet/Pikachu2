
import React from 'react';
import styled from 'styled-components';
import MUNHeader from './MUNHeader';
import MUNHeaderTab from './MUNHeaderTab';
import MUNSubHeader from './MUNSubHeader';
import MUNSubItem from './MUNSubItem';
import MeetUpInfoList from '../MeetUpInfoList';

const MeetUpNaviWrapper = styled.div`
  display:flex;
  flex-direction: column;
  float:right;
  width: 350px;
  background: #F2F4F7;
  border: none;
  z-index:5;
  padding-right:2px;
  box-shadow: 3px 3px 5px #dddddd;
`;

class MeetUpNavi extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MeetUpNaviWrapper >
        <MUNHeader>
          <MUNHeaderTab>모 임</MUNHeaderTab>
          <MUNHeaderTab>그 룹</MUNHeaderTab>
        </MUNHeader>
        <MUNSubHeader>
          <MUNSubItem>날짜순</MUNSubItem>
          <MUNSubItem>인기순</MUNSubItem>
          <MUNSubItem>모임순</MUNSubItem>
        </MUNSubHeader>
        <MeetUpInfoList />
      </MeetUpNaviWrapper>
    );
  }
}

export default MeetUpNavi;
