import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export default function Resume() {
  return (
    <Pressable style={styles.buttonArea}>
      <Image
        source={require('../../assets/MenuAssets/Instructionbutton.png')}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonArea: {
    margin: 5,
    borderRadius: 30,
  },
});
