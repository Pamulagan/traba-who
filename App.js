import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css'; // Import global CSS

// Import your screens
import Dashboard from './src/screens/dashboard';
import GetStarted from './src/screens/getStarted';
import Information from './src/screens/information';
import Login from './src/screens/login';
import Matches from './src/screens/matches';
import Messages from './src/screens/messages';
import Profile from './src/screens/profile';
import Register from './src/screens/register';
import RoleSelection from './src/screens/roleSelection';
import Settings from './src/screens/settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="GetStarted"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="GetStarted" 
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen 
          name="RoleSelection" 
          component={RoleSelection}
          options={{ title: 'Select Role' }}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile}
          options={{ title: 'My Profile' }}
        />
        <Stack.Screen 
          name="Messages" 
          component={Messages}
          options={{ title: 'Messages' }}
        />
        <Stack.Screen 
          name="Matches" 
          component={Matches}
          options={{ title: 'Matches' }}
        />
        <Stack.Screen 
          name="Information" 
          component={Information}
          options={{ title: 'Information' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}