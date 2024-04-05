import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

export default function BackTextButton({ onPress }) {
  return (
    <Pressable style={styles.buttonArea} onPress={onPress}>
      <Image
        source={require('../../assets/InstructionPageAssets/BackTextButton.png')}
        style={styles.buttonImage}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonImage: {
    width: 65,
    height: 20,
  },
  buttonArea: {
    position: 'absolute',
    top: 150,
    right: 60,
  },
});
