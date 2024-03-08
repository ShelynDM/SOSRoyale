import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';

export default function PlayerOne() {
  return (
    <View style={styles.playerIconArea}>
      <Image source={require('../../assets/GamePlayAssets/Player1Icon.png')} />
      <Image source={require('../../assets/GamePlayAssets/Scoreboard.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  playerIconArea: {
    position: 'absolute',
    flexDirection: 'row',
    top: 260,
    right: 50,
  },
});
