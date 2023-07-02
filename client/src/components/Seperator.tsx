import React from 'react';
import {useTheme} from '../hooks';
import Block from './Block';

function Seperator() {
  const {colors, sizes} = useTheme();
  return (
    <Block height={2} width={sizes.width} flex={0} color={colors.separator} />
  );
}

export default React.memo(Seperator);
