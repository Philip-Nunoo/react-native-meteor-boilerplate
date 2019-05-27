import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import gravatar from 'gravatar-api';

import styles from './styles';
import avatarImage from '../../images/avatar-placeholder.png';

const Avatar = ({ email }) => {
  const gravatarOptions = {
    email,
    parameters: { size: 200 },
  };

  const uri = gravatar.imageUrl(gravatarOptions);
  return (
    <Image
      style={styles.avatar}
      source={{ uri }}
      defaultSource={avatarImage}
    />
  );
};

Avatar.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Avatar;
