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
      source={require('../../assets/GamePlayAssets/3x3Board.png')}
      style={styles.backgroundImage}>
      <View style={styles.mainGrid}>
        <View>
          <View style={styles.grid}></View>
          <View style={styles.grid}></View>
          <View style={styles.grid}></View>
        </View>
        <View>
          <View style={styles.grid}></View>
          <View style={styles.grid}></View>
          <View style={styles.grid}></View>
        </View>
        <View>
          <View style={styles.grid}></View>
          <View style={styles.grid}></View>
          <View style={styles.grid}></View>
        </View>
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
  mainGrid: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 250,
    height: 250,
    top: 68,
    left: -8,
  },
  grid: {
    width: 80,
    height: 80,
    //borderWidth: 1,
    //borderColor: 'pink',
    margin: 4,
    //backgroundColor: '#1a5c03',
  },
});
