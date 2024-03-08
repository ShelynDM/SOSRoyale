import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Resume from './ResumeButton';
import Instruction from './InstructionButton';
import Settings from './SettingsButton';
import ExitGame from './ExitGameButton';

export default function Menu() {
  return (
    <ImageBackground
      source={require('../../assets/MenuAssets/PopUpBoard.png')}
      style={styles.backgroundImage}>
      <View style={styles.buttonsArea}>
        <Resume />
        <Instruction />
        <Settings />
        <ExitGame />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    top: -200,
    width: 340,
    height: 450,
  },
  buttonsArea: {
    top: 110,
  },
});
