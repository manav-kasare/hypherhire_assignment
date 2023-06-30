import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Block, Image, Text} from '.';
import {IBook} from '../constants/types/data';
import {useTheme} from '../hooks';
import {navigate} from '../services/navigation';

export default function Book({title, discount, cover, price}: IBook) {
  const {colors, sizes, assets} = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => navigate('Book', {title})}>
      <Block
        maxWidth={sizes.width * 0.5 - 1}
        marginHorizontal={1}
        height={sizes.height * 0.3}
        color={colors.background}>
        {cover && cover.length ? (
          <Image
            resizeMode="cover"
            source={{uri: cover}}
            height="75%"
            width="100%"
            rounded={false}
            radius={0}
          />
        ) : (
          <Block
            align="center"
            justify="center"
            height="75%"
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
        <Block flex={1} paddingHorizontal={sizes.s}>
          <Block>
            <Text korean>{title}</Text>
          </Block>
          <Block row justify="space-between">
            <Text bold secondary>
              {discount}%
            </Text>
            <Text size={sizes.p} bold>
              {price}
              <Text korean> 원</Text>
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
}
