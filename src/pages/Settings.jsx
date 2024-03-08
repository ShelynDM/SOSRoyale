import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import BackButton from '../components/SettingsComponent/backButton';
import MusicButton from '../components/SettingsComponent/musicButton';
import SoundButton from '../components/SettingsComponent/soundButton';

export default function Settings() {
  return (
    <ImageBackground
      source={require('../assets/SettingsPageAssets/SettingsPage.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <BackButton />
        <MusicButton />
        <SoundButton />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
