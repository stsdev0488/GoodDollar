import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from '../../theme';
import { scaleW } from '../../utils';

export const BackupButton = ({ width, order, text }) => {
  return (
    <TouchableOpacity style={[styles.container, { width }]}>
      <View style={styles.orderContainer}>
        <Text
          style={[
            styles.text,
            { color: color.background, letterSpacing: -0.32 },
          ]}>
          {order}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.background,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 40,
    margin: 4,
    height: 36,
    overflow: 'hidden',
  },
  orderContainer: {
    width: 28,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  text: {
    color: color.mainText,
    fontSize: scaleW(16),
    lineHeight: scaleW(19),
  },
});

BackupButton.defaultProps = {
  width: 160,
};

BackupButton.propTypes = {
  width: PropTypes.number,
  order: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
