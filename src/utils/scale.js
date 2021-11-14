import { Dimensions } from 'react-native';

const standardScreenWidth = 360; // Change with design width

const { width } = Dimensions.get('window');
const deviceWidth = width;

export const scaleW = size => {
  const widthPercent = size * (deviceWidth / standardScreenWidth);
  return Math.min(Math.round(widthPercent), size);
};
