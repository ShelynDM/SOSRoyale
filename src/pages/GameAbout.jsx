import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import GameBackButton from '../components/GameAboutComponent/backButtonGame';
import NextTextButton from '../components/GameAboutComponent/nextTextButton';
import {useNavigation} from '@react-navigation/native';

export default function GameAbout() {
  const navigation = useNavigation();

  const navigateToAboutScreen3 = () => {
    navigation.navigate('AboutScreen3');
  };

  return (
    <ImageBackground
      source={require('../assets/AboutPageAssets/AboutPage.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <GameBackButton onPress={() => navigation.goBack()} />
        <NextTextButton onPress={navigateToAboutScreen3} />
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
