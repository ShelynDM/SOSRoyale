import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import BackButton from '../components/InstructionComponents/backButton';
import NextTextButton from '../components/InstructionComponents/nextTextButton';
import {useNavigation} from '@react-navigation/native';

export default function Instruction() {
  const navigation = useNavigation();

  const navigateToScreen2 = () => {
    navigation.navigate('Screen2');
  };

  return (
    <ImageBackground
      source={require('../assets/InstructionPageAssets/InstructionsPage1.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <BackButton onPress={() => navigation.goBack()} />
        <NextTextButton onPress={navigateToScreen2} />
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
