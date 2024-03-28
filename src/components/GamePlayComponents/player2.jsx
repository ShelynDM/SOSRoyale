import React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

export default function PlayerTwo() {
  return (
    <View style={styles.playerIconArea}>
      <Image source={require('../../assets/GamePlayAssets/Scoreboard.png')} />
      <Image source={require('../../assets/GamePlayAssets/Player2Icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  playerIconArea: {
    position: 'absolute',
    flexDirection: 'row',
    top: 650,
    left: 50,
  },
});
