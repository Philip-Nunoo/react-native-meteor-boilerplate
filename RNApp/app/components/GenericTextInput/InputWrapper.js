import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const InputWrapper = ({ children }) => {
  return (
    <View style={styles.inputWrapper}>
      {children}
    </View>
  );
};

InputWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default InputWrapper;
