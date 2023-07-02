import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Block, Image, Text } from '.';
import { IComment, IReply } from '../constants/types';
import { useTheme } from '../hooks';
import { api } from '../services/api';
import { showToast } from '../services/toast';

export default function Reply({ id, user: { username, avatar, verified }, commentId, likes, text, timeStamp }: IReply) {
    const { sizes, assets, icons, colors } = useTheme();
    return (
        <Block flex={1} >
            <Block
                row
                justify="space-between"
                align="center">
                <Block row align="center">
                    <Image rounded source={assets[avatar]} avatar />
                    <Text korean marginLeft={sizes.padding / 2}>
                        {username}
                    </Text>
                    {verified && (
                        <Image
                            marginLeft={sizes.padding / 2}
                            source={icons.verified}
                            height={14}
                            width={14}
                            radius={7}
                        />
                    )}

                    <Text marginLeft={sizes.padding / 2} gray size={10} lineHeight={12}>
                        {timeStamp}
                    </Text>
                </Block>

                <Image source={icons.menu} width={12} height={3} resizeMode="contain" />
            </Block>

            <Block marginLeft={sizes.width * 0.1} marginRight={sizes.padding}>
                <Text p lineHeight={sizes.p + 2} weight="400" color="#313B49">
                    {text}
                </Text>

                <Block row align="center" justify="flex-start">
                    <Block flex={0} row align="center">
                        <Image
                            source={icons.like}
                            height={sizes.socialIconSize}
                            width={sizes.socialIconSize}
                        />
                        <Text size={9} lineHeight={9} color={colors.info}>
                            {likes.toString()}
                        </Text>
                    </Block>

                </Block>
            </Block>
        </Block>
    )
}