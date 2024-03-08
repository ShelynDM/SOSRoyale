import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';

export default function OButton() {
  return (
    <Pressable style={styles.button}>
      <Image source={require('../../assets/GamePlayAssets/O-icon.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 210,
    left: 70,
  },
});
