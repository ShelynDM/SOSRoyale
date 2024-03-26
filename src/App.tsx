import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Instruction"
          component={Instruction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GamePlay"
          component={GamePlay}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
