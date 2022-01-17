import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import RenderImage from '../../components/RenderImage';
import { HomeScreenHeader } from '../../components/Header';
import { getTrendingGifs } from '../../services/api';

const Home = () => {
  const [gifList, setGifList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getTrendingGifs(setGifList, gifList, offset);
  }, [offset]);

  const loadMore = () => {
    setOffset(offset + 1);
  };

  return (
    <View style={styles.container}>
      <HomeScreenHeader />
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
    backgroundColor: COLORS.black,
  },
});

export default Home;
