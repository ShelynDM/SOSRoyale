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
import BackButton from '../components/InstructionComponents/backButton';
import InstructionText from '../components/InstructionComponents/instructionText';
import NextTextButton from '../components/InstructionComponents/nextTextButton';
import BackTextButton from '../components/InstructionComponents/backTextButton';

export default function Instruction() {
  return (
    <ImageBackground
      source={require('../assets/InstructionPageAssets/InstructionPageBackground.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <BackButton />
        <InstructionText />
        <NextTextButton />
        <BackTextButton />
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
