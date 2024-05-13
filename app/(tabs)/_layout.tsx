import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerTitle: 'Expo Dictionary',
          headerShown: true,
          tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          tabBarIcon: ({ size, color }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
