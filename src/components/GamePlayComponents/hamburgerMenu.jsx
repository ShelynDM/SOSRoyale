import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';

export default function HamburgerMenu() {
  return (
    <Pressable style={styles.hamburgerMenuArea}>
      <Image
        source={require('../../assets/GamePlayAssets/hamburgerMenu.png')}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hamburgerMenuArea: {
    position: 'absolute',
    bottom: 350,
    left: 130,
  },
});
