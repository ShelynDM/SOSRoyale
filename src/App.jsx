// import React from 'react';
// import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import Home from './pages/Home';
import Instruction from './pages/Instruction';
import GamePlay from './pages/GamePlay';
import Settings from './pages/Settings';

// export default function App() {
//   return (
//     <>
//       <SafeAreaView style={{flex: 1}}>
//         <Home />
//         {/* <Instruction /> */}
//         {/* <GamePlay /> */}
//         {/* <Settings /> */}
//       </SafeAreaView>
//     </>
//   );
// }

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Instruction" component={Instruction} />
        <Stack.Screen name="GamePlay" component={GamePlay} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
