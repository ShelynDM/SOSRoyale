import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import Home from './pages/Home';
import Instruction from './pages/Instruction';
import GamePlay from './pages/GamePlay';
import Settings from './pages/Settings';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Home />
        {/* <Instruction /> */}
        {/* <GamePlay /> */}
        {/* <Settings /> */}
      </SafeAreaView>
    </>
  );
}
