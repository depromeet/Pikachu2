/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import GMap from 'components/GMap';
import LeftNavigation from 'components/LeftNavigation';
import { loadRepos } from '../App/actions';
import {
  changeUsername,
  changeMeetingOnMap,
} from './actions';
import { makeSelectUsername } from './selectors';
import Container from './Container';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  static propTypes = {
    onChangeMeetingOnMap: PropTypes.func.isRequired,
  }
  render() {
    return (
      <Container>
        <Helmet
          title="지도가 나오는 페이지"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <LeftNavigation onChangeMeetingOnMap={this.props.onChangeMeetingOnMap} />
        <GMap />
      </Container>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onChangeMeetingOnMap: (meetNo) => dispatch(changeMeetingOnMap(meetNo)),
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
