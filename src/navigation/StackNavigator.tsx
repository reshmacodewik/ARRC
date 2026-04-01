import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/Splash/SplashScreen';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import MobileNumberScreen from '../screens/Verification/MobileNumber/MobileNumberScreen';
import OTPVerificationScreen from '../screens/Verification/OTP Verfication/OTPVerificationScreen';
import IdVerificationScreen from '../screens/Verification/Id Verfication/IdVerificationScreen';
import FaceVerificationScreen from '../screens/Verification/Face verfication/FaceVerificationScreen';
import LinkAccountScreen from '../screens/LinkAccount/LinkAccountScreen';
import CardReadyToUseScreen from '../screens/CardReadyToUse/CardReadyToUseScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MobileNumber" component={MobileNumberScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name='IdVerification' component={IdVerificationScreen} />
        <Stack.Screen name='FaceVerificationScreen' component={FaceVerificationScreen} />
        <Stack.Screen name='LinkAccount' component={LinkAccountScreen} />
        <Stack.Screen name='CardReadyToUse' component={CardReadyToUseScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;