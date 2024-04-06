import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Modal,
} from 'react-native';
import GameBoard from '../components/GamePlayComponents/gameBoard4x4';
import Menu from '../components/GamePlayComponents/Menu';
import {useNavigation} from '@react-navigation/native';

export default function GamePlay() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const nav = useNavigation();

  const handleResumePress = () => {
    setIsModalVisible(false);
  };

  const handleInstructionsPress = () => {
    setIsModalVisible(false);
    nav.navigate('GameInstruction');
  };

  const handleExitPress = () => {
    setIsModalVisible(false);
    nav.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/GamePlayAssets/GamePage.png')}
      style={styles.backgroundImage}>
      <StatusBar backgroundColor={'#60e4f1'} />
      <View>
        <Pressable
          style={styles.hamburgerMenuArea}
          title="Press"
          onPress={() => {
            setIsModalVisible(true);
          }}>
          <View>
            {isModalVisible ? null : (
              <View>
                <Image
                  source={require('../assets/GamePlayAssets/hamburgerMenu.png')}></Image>
              </View>
            )}
          </View>
        </Pressable>
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          transparent={true}>
          <View>
            <Menu
              onInstructionsPress={handleInstructionsPress}
              onExitPress={handleExitPress}
              onResumePress={handleResumePress}
            />
          </View>
        </Modal>
        <View>
          <GameBoard />
        </View>
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
