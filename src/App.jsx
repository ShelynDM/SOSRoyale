// import React from 'react';
// import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import Home from './pages/Home';
import Instruction from './pages/Instruction';
import GameInstruction from './pages/GameInstruction';
import GamePlay from './pages/GamePlay';
import About from './pages/About';
import GameAbout from './pages/GameAbout';

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
import Screen2 from './components/InstructionComponents/screen2';
import Screen3 from './components/InstructionComponents/screen3';
import Screen4 from './components/InstructionComponents/screen4';
import Screen5 from './components/InstructionComponents/screen5';
import Screen6 from './components/InstructionComponents/screen6';
import Screen7 from './components/InstructionComponents/screen7';
import Screen8 from './components/InstructionComponents/screen8';
import Screen9 from './components/InstructionComponents/screen9';
import Screen10 from './components/GameInstructionComponents/screen10';
import Screen11 from './components/GameInstructionComponents/screen11';
import Screen12 from './components/GameInstructionComponents/screen12';
import Screen13 from './components/GameInstructionComponents/screen13';
import Screen14 from './components/GameInstructionComponents/screen14';
import Screen15 from './components/GameInstructionComponents/screen15';
import Screen16 from './components/GameInstructionComponents/screen16';
import Screen17 from './components/GameInstructionComponents/screen17';
import AboutScreen2 from './components/AboutComponent/aboutscreen2';
import AboutScreen3 from './components/GameAboutComponent/aboutscreen3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Instruction"
          component={Instruction}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="GameInstruction"
          component={GameInstruction}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="GamePlay"
          component={GamePlay}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="GameAbout"
          component={GameAbout}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen6"
          component={Screen6}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen7"
          component={Screen7}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen8"
          component={Screen8}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen9"
          component={Screen9}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen10"
          component={Screen10}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen11"
          component={Screen11}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen12"
          component={Screen12}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen13"
          component={Screen13}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen14"
          component={Screen14}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen15"
          component={Screen15}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen16"
          component={Screen16}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Screen17"
          component={Screen17}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="AboutScreen2"
          component={AboutScreen2}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="AboutScreen3"
          component={AboutScreen3}
          options={{headerShown: false, animation: 'none'}}
        />
        {/* <Stack.Screen name="AboutScreen2" component={AboutScreen2} options={{headerShown: false, animation: 'none'}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
