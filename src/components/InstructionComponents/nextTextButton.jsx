import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

export default function NextTextButton() {
  return (
    <Pressable style={styles.buttonArea}>
      <Image
        source={require('../../assets/InstructionPageAssets/NextTextButton.png')}
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
    left: 70,
  },
});