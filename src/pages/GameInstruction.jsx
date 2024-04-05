import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import GameBackButton from '../components/GameInstructionComponents/backButtonGame';
import NextTextButton from '../components/GameInstructionComponents/nextTextButton';
import {useNavigation} from '@react-navigation/native';

export default function GameInstruction() {
  const navigation = useNavigation();

  const navigateToScreen10 = () => {
    navigation.navigate('Screen10');
  };

  return (
    <ImageBackground
      source={require('../assets/InstructionPageAssets/InstructionsPage1.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <GameBackButton onPress={() => navigation.goBack()} />
        <NextTextButton onPress={navigateToScreen10} />
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
