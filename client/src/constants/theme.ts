import { Dimensions, Platform } from 'react-native';
import {
  ICommonTheme,
  ThemeAssets,
  ThemeFonts,
  ThemeIcons,
  ThemeLineHeights,
  ThemeWeights,
} from './types';

const { width, height } = Dimensions.get('window');

// Naming source: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const WEIGHTS: ThemeWeights = {
  text: 'normal',
  h1: Platform.OS === 'ios' ? '700' : 'normal',
  h2: Platform.OS === 'ios' ? '700' : 'normal',
  h3: Platform.OS === 'ios' ? '700' : 'normal',
  h4: Platform.OS === 'ios' ? '700' : 'normal',
  h5: Platform.OS === 'ios' ? '600' : 'normal',
  p: 'normal',

  thin: Platform.OS === 'ios' ? '100' : 'normal',
  extralight: Platform.OS === 'ios' ? '200' : 'normal',
  light: Platform.OS === 'ios' ? '300' : 'normal',
  normal: Platform.OS === 'ios' ? '400' : 'normal',
  medium: Platform.OS === 'ios' ? '500' : 'normal',
  semibold: Platform.OS === 'ios' ? '600' : 'normal',
  bold: Platform.OS === 'ios' ? '700' : 'normal',
  extrabold: Platform.OS === 'ios' ? '800' : 'normal',
  black: Platform.OS === 'ios' ? '900' : 'normal',
};

export const ICONS: ThemeIcons = {
  back: require('../assets/icons/back.png'),
  like: require('../assets/icons/like.png'),
  comment: require('../assets/icons/comment.png'),
  menu: require('../assets/icons/menu.png'),
  verified: require('../assets/icons/verified.png'),
};

export const ASSETS: ThemeAssets = {
  // fonts
  RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
  RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  RobotoExtraBold: require('../assets/fonts/Roboto-Black.ttf'),
  RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
  NotoSans: require('../assets/fonts/NotoSansKR-Medium.otf'),

  coverPlaceholder: require('../assets/images/cover-placeholder.png'),
  user1: require('../assets/images/user1.png'),
  user2: require('../assets/images/user2.png'),
};

export const FONTS: ThemeFonts = {
  // based on font size
  logo: 'CarterOne-Regular',
  text: 'Roboto-Regular',
  h1: 'Roboto-Bold',
  h2: 'Roboto-Bold',
  h3: 'Roboto-Bold',
  h4: 'Roboto-Bold',
  h5: 'Roboto-SemiBold',
  p: 'Roboto-Regular',
  korean: 'NotoSansKR-Medium',

  // based on fontWeight
  thin: 'Roboto-Light',
  extralight: 'Roboto-Light',
  light: 'Roboto-Light',
  normal: 'Roboto-Regular',
  medium: 'Roboto-SemiBold',
  semibold: 'Roboto-SemiBold',
  bold: 'Roboto-Bold',
  extrabold: 'Roboto-ExtraBold',
  black: 'Roboto-ExtraBold',
};

export const LINE_HEIGHTS: ThemeLineHeights = {
  // font lineHeight
  text: 12,
  h1: 60,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 16,
};

export const THEME: ICommonTheme = {
  icons: ICONS,
  assets: { ...ICONS, ...ASSETS },
  fonts: FONTS,
  weights: WEIGHTS,
  lines: LINE_HEIGHTS,
  sizes: { width, height },
};
