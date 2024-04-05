import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export default function ButtonComponent({image, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Image source={image} style={styles.buttonImage} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonImage: {
    width: 310,
    height: 90,
    margin: 10,
  },
});
