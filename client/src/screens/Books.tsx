import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Block, Book, Loading} from '../components';
import {IBook} from '../constants/types/data';
import {api} from '../services/api';
import {showToast} from '../services/toast';

export default function Books() {
  // const [unfilteredBooks, setUnfilteredBooks] = useState<IBook[]>([]);
  const [books, setBooks] = useState<IBook[]>([]);
  const limit = 10;
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetBooks = async () => {
    const response = await api.books.get(offset, limit);
    setLoading(false);
    if (response.error) {
      return showToast('error', response.message);
    }
    setBooks(prev => [...prev, ...response.data]);
    setOffset(prev => prev + 10);
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  const renderItem = ({item}: {item: IBook}) => <Book {...item} />;

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
      />
    </Block>
  );
}
