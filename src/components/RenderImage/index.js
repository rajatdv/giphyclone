import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Skeleton from '../../components/Skeleton';

const RenderImage = ({ item }) => {
  const [loading, setLoading] = useState(true);
  item = item.item.images.fixed_width;
  let width = parseInt(item.width);
  let height = parseInt(item.height);

  return (
    <View
      style={{
        height: height,
        width: width - 10,
        marginBottom: 6,
      }}>
      {loading ? <Skeleton /> : null}
      <FastImage
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 6,
        }}
        source={{ uri: item.url, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.cover}
        onLoad={() => setLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default RenderImage;
