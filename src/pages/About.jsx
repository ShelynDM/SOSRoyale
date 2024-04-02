import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import BackButton from '../components/AboutComponent/backButton';
import NextTextButton from '../components/AboutComponent/nextTextButton';
import {useNavigation} from '@react-navigation/native';

export default function Instruction() {
  const navigation = useNavigation();

  const navigateToAboutScreen2 = () => {
    navigation.navigate('AboutScreen2');
  };

  return (
    <ImageBackground
      source={require('../assets/AboutPageAssets/AboutPage.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <BackButton onPress={() => navigation.goBack()} />
        <NextTextButton onPress={navigateToAboutScreen2} />
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
