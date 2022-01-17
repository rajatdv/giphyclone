import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { COLORS } from '../../theme';

const Skeleton = () => {
  const animatedValue = useRef(new Animated.Value(0.4));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue.current, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear.inOut,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue.current, {
          toValue: 0.4,
          duration: 1000,
          easing: Easing.linear.inOut,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        { opacity: animatedValue.current },
        styles.container,
      ]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 6,
  },
});

export default Skeleton;
