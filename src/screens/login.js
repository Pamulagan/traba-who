// src/screens/login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
    navigation.navigate('Dashboard');
  };

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-8 text-gray-800">Sign In</Text>
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4 text-base"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4 text-base"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity className="w-full bg-orange-600 p-4 rounded-lg items-center mb-4" onPress={handleLogin}>
        <Text className="text-white text-base font-bold">Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="text-blue-500 text-sm underline">Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}