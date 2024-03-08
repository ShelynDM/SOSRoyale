import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function GameBoard() {
  return (
    <ImageBackground
      source={require('../../assets/GamePlayAssets/Board.png')}
      style={styles.backgroundImage}>
      <View>
        <Text>Game Board</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: -150,
    width: 340,
    height: 400,
  },
});
