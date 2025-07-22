// src/screens/profile.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-8 text-gray-800">My Profile</Text>
      {/* Profile content here */}
      
      <TouchableOpacity 
        className="w-full bg-orange-600 p-4 rounded-lg items-center"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white text-base font-bold">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}