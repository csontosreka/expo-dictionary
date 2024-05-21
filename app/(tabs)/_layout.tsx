import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: theme.color7.get() 

      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerTitle: 'Expo Dictionary',
          headerShown: true,
          headerStyle: { backgroundColor: theme.color7.get()},
          headerTintColor: '#fff',
          tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          headerShown: true,
          headerStyle: { backgroundColor: theme.color7.get()},
          headerTintColor: '#fff',
          tabBarIcon: ({ size, color }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
