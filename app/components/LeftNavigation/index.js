import React, { Component } from 'react';
import Conatiner from './container';

import GroupInfoNavigation from '../GroupInfoNavigation';
import MeetUpNavi from '../MeetUpNavi';

class LeftNavigation extends Component {
  constructor(props) {
    super(props);
    console.info('ddd');
  }

  render() {
    return (
      <Conatiner>
        <GroupInfoNavigation></GroupInfoNavigation>
        <MeetUpNavi></MeetUpNavi>
      </Conatiner>
    );
  }
}

export default LeftNavigation;
