import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  Settings,
  Modal,
} from 'react-native';
import HamburgerMenu from '../components/GamePlayComponents/hamburgerMenu';
import GameBoard from '../components/GamePlayComponents/gameBoard';
import PlayerOne from '../components/GamePlayComponents/player1';
import PlayerTwo from '../components/GamePlayComponents/player2';
import SButton from '../components/GamePlayComponents/S-button';
import OButton from '../components/GamePlayComponents/O-button';
import Menu from '../components/MenuComponents/Menu';

export default function GamePlay() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  return (
    <ImageBackground
      source={require('../assets/GamePlayAssets/GamePlayBg.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <Pressable
          style={styles.hamburgerMenuArea}
          title="Press"
          onPress={() => {
            setIsModalVisible(true);
          }}>
          <HamburgerMenu />
        </Pressable>
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          transparent={true}>
          <View>
            <Menu />
          </View>
        </Modal>
        <SButton />
        <OButton />
        <View>
          <GameBoard />
        </View>
        <PlayerOne />
        <PlayerTwo />
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
  hamburgerMenuArea: {
    position: 'absolute',
    bottom: 350,
    left: 130,
  },
});
