import React from 'react';
import {Image, Pressable, StyleSheet, Button} from 'react-native';

export default function PlayButton() {
  return (
    <>
      <Image
        source={require('../../assets/HomePageAssets/Playbutton.png')}
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
