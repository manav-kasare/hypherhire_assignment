import React from 'react';
import {Platform, StyleSheet, Text, TextStyle} from 'react-native';

import {ITextProps} from '../constants/types';
import useTheme from '../hooks/useTheme';

const Typography = (props: ITextProps) => {
  const {
    id = 'Text',
    children,
    style,
    center,
    color,
    opacity,
    // predefined colors
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    danger,
    warning,
    success,
    info,
    size,
    bold,
    semibold,
    weight,
    logo,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    font,
    align,
    transform,
    lineHeight,
    position,
    right,
    left,
    top,
    bottom,
    marginBottom,
    marginTop,
    marginHorizontal,
    marginVertical,
    marginRight,
    marginLeft,
    paddingBottom,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
    paddingRight,
    paddingLeft,
    korean,
    ...rest
  } = props;
  const {colors, sizes, lines, weights, fonts} = useTheme();

  const colorIndex = primary
    ? 'primary'
    : secondary
    ? 'secondary'
    : tertiary
    ? 'tertiary'
    : black
    ? 'black'
    : white
    ? 'white'
    : gray
    ? 'gray'
    : danger
    ? 'danger'
    : warning
    ? 'warning'
    : success
    ? 'success'
    : info
    ? 'info'
    : null;
  const textColor = color
    ? color
    : colorIndex
    ? colors?.[colorIndex]
    : undefined;

  const textStyles = StyleSheet.flatten([
    style,
    {
      color: colors.text,
      fontSize: sizes.text,
      lineHeight: lines.text,
      fontWeight: weights.text,
      fontFamily: fonts.text,
      ...(textColor && {color: textColor}),
      ...(logo && {
        fontSize: sizes.h1,
        lineHeight: lines.h1,
        fontWeight: weights.h1,
        fontFamily: fonts.logo,
      }),
      ...(h1 && {
        fontSize: sizes.h1,
        lineHeight: lines.h1,
        fontWeight: weights.h1,
        fontFamily: fonts.h1,
      }),
      ...(h2 && {
        fontSize: sizes.h2,
        lineHeight: lines.h2,
        fontWeight: weights.h2,
        fontFamily: fonts.h2,
      }),
      ...(h3 && {
        fontSize: sizes.h3,
        lineHeight: lines.h3,
        fontWeight: weights.h3,
        fontFamily: fonts.h3,
      }),
      ...(h4 && {
        fontSize: sizes.h4,
        lineHeight: lines.h4,
        fontWeight: weights.h4,
        fontFamily: fonts.h4,
      }),
      ...(h5 && {
        fontSize: sizes.h5,
        lineHeight: lines.h5,
        fontWeight: weights.h5,
        fontFamily: fonts.h5,
      }),
      ...(p && {
        fontSize: sizes.p,
        lineHeight: lines.p,
        fontWeight: weights.p,
        fontFamily: fonts.p,
      }),
      ...(korean && {
        fontSize: sizes.p,
        lineHeight: lines.h5,
        fontWeight: '500',
        fontFamily: fonts.korean,
      }),
      ...(marginBottom && {marginBottom}),
      ...(marginTop && {marginTop}),
      ...(marginHorizontal && {marginHorizontal}),
      ...(marginVertical && {marginVertical}),
      ...(marginRight && {marginRight}),
      ...(marginLeft && {marginLeft}),
      ...(paddingBottom && {paddingBottom}),
      ...(paddingTop && {paddingTop}),
      ...(paddingHorizontal && {paddingHorizontal}),
      ...(paddingVertical && {paddingVertical}),
      ...(paddingRight && {paddingRight}),
      ...(paddingLeft && {paddingLeft}),
      ...(center && {textAlign: 'center'}),
      ...(align && {textAlign: align}),
      ...(bold && {fontFamily: fonts.bold}),
      ...(semibold && {fontFamily: fonts.semibold}),
      ...(weight && {fontWeight: weight}),
      ...(transform && {textTransform: transform}),
      ...(font && {fontFamily: font}),
      ...(size && {fontSize: size}),
      ...(color && {color}),
      ...(opacity && {opacity}),
      ...(lineHeight && {lineHeight}),
      ...(position && {position}),
      ...(right !== undefined && {right}),
      ...(left !== undefined && {left}),
      ...(top !== undefined && {top}),
      ...(bottom !== undefined && {bottom}),
    },
  ]) as TextStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const textID =
    Platform.OS === 'android' ? {accessibilityLabel: id} : {testID: id};

  return (
    <Text {...textID} {...rest} style={textStyles}>
      {children}
    </Text>
  );
};

export default React.memo(Typography);
