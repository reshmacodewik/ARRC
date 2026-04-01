import React from 'react';
import { ImageBackground, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './src/navigation/StackNavigator';
import { IMAGES } from './src/constants/images';

function App() {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ImageBackground
        source={IMAGES.splashBg}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }} >
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <StackNavigator />
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

export default App;