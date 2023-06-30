import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {Block, Book, Loading} from '../components';
import {IBook} from '../constants/types/data';
import {useTheme} from '../hooks';
import {api} from '../services/api';
import {showToast} from '../services/toast';

export default function Books() {
  const {colors, sizes} = useTheme();

  const [books, setBooks] = useState<IBook[]>([]);
  const limit = 10;
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleGetBooks = async (fresh?: boolean) => {
    setLoadingMore(true);
    const response = await api.books.get(fresh ? 0 : offset, limit);
    setLoading(false);
    setLoadingMore(false);
    if (isRefreshing) {
      setIsRefreshing(false);
    }
    if (response.error) {
      return showToast('error', response.message);
    }
    setBooks(prev => [...prev, ...response.data]);
    setOffset(prev => prev + 10);
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  const resetData = () => {
    setBooks([]);
    setOffset(0);
    handleGetBooks(true);
  };

  const handleRefresh = () => {
    if (!loadingMore) {
      setIsRefreshing(true);
      resetData();
    }
  };

  const renderItem = ({item}: {item: IBook}) => <Book {...item} />;

  const renderFooter = () => {
    if (loadingMore) {
      return (
        <Block marginVertical={sizes.l}>
          <ActivityIndicator color={colors.text} size="large" />
        </Block>
      );
    }
    return null;
  };

  return loading ? (
    <Loading />
  ) : (
    <Block>
      <FlatList
        data={books}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleGetBooks}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </Block>
  );
}
