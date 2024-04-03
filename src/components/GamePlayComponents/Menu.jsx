import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Menu({
  onInstructionsPress,
  onAboutPress,
  onExitPress,
  onResumePress,
}) {
  const nav = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../assets/MenuAssets/ModalBg.png')}
        style={styles.backgroundImage}>
        <View style={styles.buttonsArea}>
          <Pressable onPress={onResumePress} style={styles.menuButtons}>
            <Image
              source={require('../../assets/MenuAssets/ResumeButton.png')}
            />
          </Pressable>
          <Pressable onPress={onInstructionsPress} style={styles.menuButtons}>
            <Image
              source={require('../../assets/MenuAssets/InstructionButton.png')}
            />
          </Pressable>
          <Pressable onPress={onAboutPress} style={styles.menuButtons}>
            <Image
              source={require('../../assets/MenuAssets/AboutButton.png')}
            />
          </Pressable>
          <Pressable onPress={onExitPress} style={styles.menuButtons}>
            <Image
              source={require('../../assets/MenuAssets/ExitGameButton.png')}
            />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  buttonsArea: {
    top: 300,
  },
  menuButtons: {
    margin: 5,
    borderRadius: 25,
  },
});
