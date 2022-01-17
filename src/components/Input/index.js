import React from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';
import { FONTS, COLORS } from '../../theme';

const CustomInput = ({
  onChangeText,
  value,
  containerStyle,
  textInputStyle,
  placeholder = 'Search',
  secureTextEntry = false,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  disabled = true,
  iconName,
  ...props
}) => {
  return (
    <View
      style={StyleSheet.flatten([styles.customInputContainer, containerStyle])}>
      <TextInput
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        placeholderTextColor={COLORS.black}
        selectionColor={COLORS.grey}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        disabled={disabled}
        style={StyleSheet.flatten([
          styles.customTextInput,
          textInputStyle,
          { fontWeight: disabled ? 'normal' : 'bold' },
        ])}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customInputContainer: {
    height: 54,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTextInput: {
    ...FONTS.body4,
    width: '100%',
    height: '100%',
    padding: 12,
    color: COLORS.black,
    backgroundColor: COLORS.white,
  },
});

export { CustomInput };
