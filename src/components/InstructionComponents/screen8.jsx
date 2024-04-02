import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View, Pressable, Image } from 'react-native';
import NextTextButton from './nextTextButton';
import BackTextButton from './backTextButton';
import BackButton from './backButton';
import { useNavigation } from '@react-navigation/native';


export default function Screen8() {
    const navigation = useNavigation();

    const navigateToScreen9 = () => {
        navigation.navigate('Screen9');
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <ImageBackground
            source={require('../../assets/InstructionPageAssets/Screen8.png')}
            style={styles.backgroundImage}>
        <StatusBar backgroundColor={'#60e4f1'} />
            <View style={styles.container}>
                <BackButton onPress={navigateToHome}/>
                <BackTextButton onPress={handleBackPress} />     
                <NextTextButton onPress={navigateToScreen9} />
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
