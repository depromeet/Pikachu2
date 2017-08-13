import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Conatiner from './container';

import GroupInfoNavigation from '../GroupInfoNavigation';
import MeetUpNavi from '../MeetUpNavi';

class LeftNavigation extends Component {
  static propTypes = {
    onChangeMeetingOnMap: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    console.log('dsaf');
  }

  render() {
    return (
      <Conatiner>
        <GroupInfoNavigation></GroupInfoNavigation>
        <MeetUpNavi onChangeMeetingOnMap={this.props.onChangeMeetingOnMap} ></MeetUpNavi>
      </Conatiner>
    );
  }
}

export default LeftNavigation;
