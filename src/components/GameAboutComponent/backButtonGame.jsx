import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function GameBackButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('GamePlay');
  };

  return (
    <Pressable onPress={handlePress} style={styles.backButtonArea}>
      <Image
        source={require('../../assets/AboutPageAssets/BackButton.png')}
        style={styles.backButtonImage}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButtonImage: {
    width: 55,
    height: 43,
  },
  backButtonArea: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 15,
    bottom: 340,
    right: 120,
  },
});
