import React from 'react';
import {Block, Image, Seperator, Text} from '../components';
import {IBook} from '../constants/types/data';
import {useTheme} from '../hooks';
import {CommentSection} from './components';

interface Props {
  route: {params: IBook};
}

export default function Book({route}: Props) {
  const {params} = route;
  const {id, title, description, discount, price, cover} = params;

  const {colors, sizes, assets} = useTheme();

  return (
    <Block scroll>
      <Block flex={0} height={sizes.height * 0.4} width={sizes.width}>
        {cover && cover.length ? (
          <Image
            resizeMode="cover"
            source={{uri: cover}}
            height="100%"
            width="100%"
            rounded={false}
            radius={0}
          />
        ) : (
          <Block
            align="center"
            justify="center"
            height="100%"
            width="100%"
            color={colors.tertiary}
            flex={0}
            radius={0}>
            <Image
              source={assets.coverPlaceholder}
              height={sizes.m}
              width={sizes.m}
              rounded={false}
              radius={0}
            />
          </Block>
        )}
      </Block>

      <Block flex={0} padding={sizes.padding / 2}>
        <Text korean size={sizes.m} lineHeight={sizes.md}>
          {title}
        </Text>

        <Block flex={0} marginTop={sizes.padding / 2}>
          <Text p lineHeight={sizes.m} size={sizes.text}>
            {description}
          </Text>
        </Block>

        <Block
          flex={0}
          marginTop={sizes.padding / 2}
          row
          justify="space-between">
          <Text p bold secondary>
            {discount}%
          </Text>
          <Text size={sizes.p} bold>
            {price}
            <Text korean> 원</Text>
          </Text>
        </Block>
      </Block>

      <Seperator />

      <Block flex={0}>
        <CommentSection />
      </Block>
    </Block>
  );
}
