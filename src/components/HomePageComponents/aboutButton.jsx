import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  Touchable,
} from 'react-native';

export default function AboutButton() {
  return (
    <>
      <Image
        source={require('../../assets/HomePageAssets/AboutButton.png')}
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
