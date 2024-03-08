import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

export default function MusicButton() {
  return (
    <Pressable style={styles.buttonArea}>
      <Image
        source={require('../../assets/SettingsPageAssets/MusicIcon.png')}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonArea: {
    position: 'absolute',
    bottom: 55,
    right: 65,
  },
});
