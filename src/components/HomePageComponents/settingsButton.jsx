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
    <Pressable style={styles.buttonArea}>
      <Image
        source={require('../../assets/HomePageAssets/SettingsButton.png')}
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
