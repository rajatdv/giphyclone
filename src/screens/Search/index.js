import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../../components/SearchBar';
import { COLORS } from '../../theme';
import RenderImage from '../../components/RenderImage';
import { searchGifs } from '../../services/api';

const Search = () => {
  const [gifList, setGifList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchGifs(setGifList, gifList, offset, query);
  }, [offset, query]);

  const loadMore = () => {
    setOffset(offset + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar value={query} onChangeText={setQuery} />
      </View>
      <FlatList
        data={gifList}
        renderItem={item => <RenderImage item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLORS.black,
  },
  searchContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
