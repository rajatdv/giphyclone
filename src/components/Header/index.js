import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

const HomeScreenHeader = () => {
  return (
    <View style={styles.homeScreenHeader}>
      <Text style={styles.title}>GIFFY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreenHeader: {
    backgroundColor: COLORS.black,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: COLORS.white,
    ...FONTS.title,
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export { HomeScreenHeader };
