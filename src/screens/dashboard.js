// src/screens/dashboard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-8 text-gray-800">Dashboard</Text>
      
      <TouchableOpacity 
        className="w-full bg-blue-500 p-4 rounded-lg items-center mb-3"
        onPress={() => navigation.navigate('Profile')}
      >
        <Text className="text-white text-base">My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="w-full bg-blue-500 p-4 rounded-lg items-center mb-3"
        onPress={() => navigation.navigate('Messages')}
      >
        <Text className="text-white text-base">Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="w-full bg-blue-500 p-4 rounded-lg items-center mb-3"
        onPress={() => navigation.navigate('Matches')}
      >
        <Text className="text-white text-base">Job Matches</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="w-full bg-blue-500 p-4 rounded-lg items-center mb-3"
        onPress={() => navigation.navigate('Settings')}
      >
        <Text className="text-white text-base">Settings</Text>
      </TouchableOpacity>
    </View>
  );
}