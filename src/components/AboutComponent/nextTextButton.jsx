import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';


export default function NextTextButton({ onPress }) {
  return (
    <Pressable style={styles.buttonArea} onPress={onPress}>
      <Image
        source={require('../../assets/AboutPageAssets/NextTextButton.png')}
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
    top: 90,
    left: 70,
  },
});
