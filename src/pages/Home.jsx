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
  Button,
} from 'react-native';
import PlayButton from '../components/HomePageComponents/playButton';
import InstructionButton from '../components/HomePageComponents/instructionButton';
import AboutButton from '../components/HomePageComponents/aboutButton';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/HomePageAssets/HomePageBg.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />

      <View style={styles.buttonArea}>
        <Pressable
          onPress={() => navigation.navigate('GamePlay')}
          style={styles.button}>
          <PlayButton />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Instruction')}
          style={styles.button}>
          <InstructionButton />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('About')}
          style={styles.button}>
          <AboutButton />
        </Pressable>
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
  button: {
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'black',
  },
});
