import React from 'react';
import PropTypes from 'prop-types';
import Meteor, { createContainer } from 'react-native-meteor';

import { AuthStack, Tabs } from './config/routes';
import Loading from './components/Loading';
import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

const RNApp = (props) => {
  const { status, user, loggingIn } = props;

  if (status.connected === false || loggingIn) {
    return <Loading />;
  } if (user !== null) {
    return <Tabs />;
  }
  return <AuthStack />;
};

RNApp.propTypes = {
  status: PropTypes.shape({
    connected: PropTypes.bool.isRequired,
  }).isRequired,
  user: PropTypes.shape({}),
  loggingIn: PropTypes.bool.isRequired,
};

RNApp.defaultProps = {
  user: null,
};

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, RNApp);
