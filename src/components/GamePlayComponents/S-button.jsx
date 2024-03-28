import React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

export default function SButton() {
  return (
    <Pressable style={styles.button}>
      <Image source={require('../../assets/GamePlayAssets/S-icon.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 40,
    left: 35,
  },
});
