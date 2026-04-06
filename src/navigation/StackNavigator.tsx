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
import RewardEarnedScreen from '../screens/RewardEarned/RewardEarnedScreen';
import TransitionRewardScreen from '../screens/TransitionReward/TransitionRewardScreen';
import BoostedOffersScreen from '../screens/BoostedOffers/BoostedOffersScreen';
import PrivacyPolicyScreen from '../screens/Tab/Profile/Privacy/PrivacyPolicyScreen';
import TermsConditionScreen from '../screens/Tab/Profile/Terms/TermsConditionScreen';
import EditProfileScreen from '../screens/Tab/Profile/EditProfileScreen';
import SupportScreen from '../screens/Tab/Profile/SupportTicket/SupportScreen';
import SupportTicketListScreen from '../screens/Tab/Profile/SupportTicket/SupportTicketList/SupportTicketListScreen';
import CreateSupportTicketScreen from '../screens/Tab/Profile/SupportTicket/CreateTicket/CreateSupportTicketScreen';
import SupportTicketChatScreen from '../screens/Tab/Profile/SupportTicket/TicketChat/SupportTicketChatScreen';

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
        <Stack.Screen name='RewardEarned' component={RewardEarnedScreen} />
        <Stack.Screen name='TransitionReward' component={TransitionRewardScreen} />
        <Stack.Screen name='BoostedOffers' component={BoostedOffersScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}/>
        <Stack.Screen name='TermsConditions' component={TermsConditionScreen}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        <Stack.Screen name="Support" component={SupportScreen}/>
        <Stack.Screen name="SupportTicketList" component={SupportTicketListScreen}/>
        <Stack.Screen name="CreateSupportTicket" component={CreateSupportTicketScreen} />
        <Stack.Screen name="SupportTicketChat" component={SupportTicketChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;