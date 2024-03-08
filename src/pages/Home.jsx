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
  Settings,
} from 'react-native';
import PlayButton from '../components/HomePageComponents/playButton';
import InstructionButton from '../components/HomePageComponents/instructionButton';
import SettingsButton from '../components/HomePageComponents/settingsButton';

export default function Home() {
  return (
    <ImageBackground
      source={require('../assets/HomePageAssets/HomePageBg.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View style={styles.buttonArea}>
        <PlayButton />
        <InstructionButton />
        <SettingsButton />
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
  buttonArea: {
    top: 120,
  },
});
