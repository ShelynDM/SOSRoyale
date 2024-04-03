import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Pressable,
  Image,
} from 'react-native';
import NextTextButton from './nextTextButton';
import BackTextButton from './backTextButton';
import GameBackButton from './backButtonGame';
import {useNavigation} from '@react-navigation/native';

export default function Screen12() {
  const navigation = useNavigation();

  const navigateToScreen13 = () => {
    navigation.navigate('Screen13');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const navigateToGamePlay = () => {
    navigation.navigate('GamePlay');
  };

  return (
    <ImageBackground
      source={require('../../assets/InstructionPageAssets/Screen4.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View style={styles.container}>
        <GameBackButton onPress={navigateToGamePlay} />
        <BackTextButton onPress={handleBackPress} />
        <NextTextButton onPress={navigateToScreen13} />
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
