import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View, Pressable, Image } from 'react-native';
import NextTextButton from './nextTextButton';
import BackTextButton from './backTextButton';
import BackButton from './backButton';
import { useNavigation } from '@react-navigation/native';


export default function Screen6() {
    const navigation = useNavigation();

    const navigateToScreen7 = () => {
        navigation.navigate('Screen7');
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <ImageBackground
            source={require('../../assets/InstructionPageAssets/Screen6.png')}
            style={styles.backgroundImage}>
        <StatusBar backgroundColor={'#60e4f1'} />
            <View style={styles.container}>
                <BackButton onPress={navigateToHome}/>
                <BackTextButton onPress={handleBackPress} />     
                <NextTextButton onPress={navigateToScreen7} />
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
});
