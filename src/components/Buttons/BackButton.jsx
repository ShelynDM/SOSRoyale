import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export default function BackButtonComponent({image, onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.backButtonArea}>
      <Image source={image} style={styles.backButtonImage} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButtonImage: {
    width: 55,
    height: 43,
  },
  backButtonArea: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 15,
    bottom: 340,
    right: 120,
  },
});
