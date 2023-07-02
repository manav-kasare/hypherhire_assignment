import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { Block, Comment, Image, Seperator, Text } from '../../components';
import { IComment } from '../../constants/types';
import { useTheme } from '../../hooks';
import { api } from '../../services/api';
import { showToast } from '../../services/toast';

const AddComment = () => {
  const { sizes, assets, colors } = useTheme();

  return (
    <Block row align='center' paddingHorizontal={sizes.padding} height={sizes.xl}>
      <Image rounded={false} radius={0} height={20} width={20} source={assets.coverPlaceholder} resizeMode='contain' />
      <TextInput style={{ color: colors.text, fontSize: 12, paddingHorizontal: sizes.padding, flex: 1 }} placeholder='댓글을 남겨주세요.' placeholderTextColor={colors.placeholder} />
      <TouchableOpacity>
        <Text size={sizes.p} lineHeight={sizes.p + 2} color={colors.info} >
          등록
        </Text>
      </TouchableOpacity>
    </Block>
  )
}

export default function CommentSection() {
  const [loading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState<IComment[]>([]);

  const handleGetComments = async () => {
    const response = await api.comments.get();
    if (loading) {
      setLoading(false);
    }
    if (response.error) {
      return showToast('error', response.message);
    }
    setComments(response.data);
  };

  useEffect(() => {
    handleGetComments();
  }, []);

  const renderItem = ({ item }: { item: IComment }) => <Comment {...item} />;

  return (
    <Block>
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Seperator />
      <AddComment />
    </Block>
  );
}
