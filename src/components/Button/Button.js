import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color } from '../../theme';
import { scaleW } from '../../utils';

export const Button = ({ variant, text }) => {
  let backColor = color.primary;
  let textColor = color.background;
  if (variant === 'outlined') {
    backColor = color.background;
    textColor = color.primary;
  }
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44,
    borderWidth: 1,
    borderColor: color.primary,
  },
  text: {
    fontSize: scaleW(18),
    fontWeight: '600',
    lineHeight: scaleW(21),
    color: color.background,
  },
});

Button.defaultProps = {
  variant: 'filled',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined']),
  text: PropTypes.string.isRequired,
};
