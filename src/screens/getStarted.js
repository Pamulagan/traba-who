import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function GetStarted({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-5">
      <Text className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Welcome to JobApp
      </Text>
      <TouchableOpacity 
        className="bg-blue-500 px-8 py-4 rounded-lg shadow-lg"
        onPress={() => navigation.navigate('Login')}
      >
        <Text className="text-white text-lg font-semibold text-center">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}