import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomInput } from '../Input';
import { COLORS } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
const SearchBar = ({ value, onChangeText, onPress }) => {
  return (
    <View style={styles.container}>
      <CustomInput
        value={value}
        onChangeText={onChangeText}
        containerStyle={{ width: '80%', height: '80%' }}
      />
      <Pressable onPress={onPress} style={styles.pressable}>
        <LinearGradient
          colors={['#f20a5b', '#b83e69', '#f20a5b']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}>
          <MaterialCommunityIcons
            name={'magnify'}
            color={COLORS.white}
            size={36}
          />
        </LinearGradient>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressable: {
    width: '15%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBar;
