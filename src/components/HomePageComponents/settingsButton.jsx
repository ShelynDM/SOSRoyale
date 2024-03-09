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

export default function SettingsButton() {
  return (
    <>
      <Image
        source={require('../../assets/HomePageAssets/SettingsButton.png')}
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
