import React from 'react';
import {StyleSheet, View, ImageBackground, StatusBar} from 'react-native';
import ButtonComponent from '../components/Buttons/MainButton';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/HomePageAssets/HomePageBg.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />

      <View style={styles.buttonArea}>
        <ButtonComponent
          title="Play"
          onPress={() => navigation.navigate('GamePlay')}
          image={require('../assets/HomePageAssets/Playbutton.png')}
        />
        <ButtonComponent
          title="Instruction"
          onPress={() => navigation.navigate('Instruction')}
          image={require('../assets/HomePageAssets/Instructionbutton.png')}
        />
        <ButtonComponent
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
          image={require('../assets/HomePageAssets/SettingsButton.png')}
        />
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
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'black',
    width: 310,
    height: 90,
  },
});
