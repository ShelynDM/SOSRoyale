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

export default function Instruction({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/InstructionPageAssets/InstructionPageBackground.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={styles.button}></Pressable>
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
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 15,
    bottom: 340,
    right: 120,
  },
});
