import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export default function PlayButton() {
  return (
    <Pressable style={styles.buttonArea}>
      <Image
        source={require('../../assets/HomePageAssets/Playbutton.png')}
        style={styles.buttonImage}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonImage: {
    width: 310,
    height: 90,
  },
  buttonArea: {
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'black',
  },
});
