import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Block, Image, Reply, Text } from '.';
import { IComment, IReply } from '../constants/types';
import { useTheme } from '../hooks';
import { api } from '../services/api';
import { showToast } from '../services/toast';

interface RepliesProps {
  commentId: String;
}

const Replies = ({ commentId }: RepliesProps) => {
  const { sizes } = useTheme();

  const [replies, setReplies] = useState<IReply[]>([]);

  const handleGetReplies = async () => {
    const response = await api.replies.get(commentId);
    if (response.error) {
      return showToast('error', response.message);
    }
    setReplies(response.data);
  };

  useEffect(() => {
    handleGetReplies();
  }, []);

  const renderItem = ({ item }: { item: IReply }) => <Reply {...item} />

  return (
    <Block marginTop={sizes.padding}>
      <FlatList
        data={replies}
        keyExtractor={(item: IReply) => item.id}
        renderItem={renderItem}
      />
    </Block>
  );
};

export default function Comment({
  id,
  user: { username, avatar, verified },
  text,
  likes,
  replies,
  timeStamp,
}: IComment) {
  const { sizes, assets, icons, colors } = useTheme();
  return (
    <Block flex={0} width={sizes.width}>
      <Block
        row
        justify="space-between"
        align="center"
        paddingHorizontal={sizes.padding}
        paddingTop={sizes.padding}>
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

      <Block marginLeft={sizes.width * 0.125} marginRight={sizes.padding * 2}>
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

          <Block flex={0} marginLeft={sizes.padding / 2} row align="center">
            <Image
              source={icons.comment}
              height={sizes.socialIconSize}
              width={sizes.socialIconSize}
              resizeMode="contain"
            />
            <Text size={9} lineHeight={9} color={colors.info}>
              {replies.toString()}
            </Text>
          </Block>

        </Block>
        <Replies commentId={id} />
      </Block>
    </Block>
  );
}
