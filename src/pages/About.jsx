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
import BackButtonComponent from '../components/Buttons/BackButton';

export default function About({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/AboutPageAssets/AboutPage.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <BackButtonComponent
          title="BackButton"
          onPress={() => navigation.goBack()}
          image={require('../assets/AboutPageAssets/BackButton.png')}
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
});
