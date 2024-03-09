import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export default function InstructionButton() {
  return (
    <>
      <Image
        source={require('../../assets/HomePageAssets/Instructionbutton.png')}
        style={styles.buttonImage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  buttonImage: {
    width: 310,
    height: 90,
  },
});
