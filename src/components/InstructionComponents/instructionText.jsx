import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

export default function InstructionText() {
  return (
    <Text style={styles.text}>
      Welcome to the game! The goal of the game is to get the highest score
      possible. You can do this by collecting coins and avoiding obstacles. The
      game will get harder as you progress. Good luck!
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
    bottom: -50,
    left: -150,
    width: 300,
  },
});
