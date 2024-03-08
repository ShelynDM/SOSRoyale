import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

export default function BackButton() {
  return (
    <Pressable style={styles.buttonArea}>
      <Image
        source={require('../../assets/InstructionPageAssets/BackButton.png')}
        style={styles.buttonImage}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonImage: {
    width: 55,
    height: 43,
  },
  buttonArea: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 15,
    bottom: 340,
    right: 120,
  },
});
