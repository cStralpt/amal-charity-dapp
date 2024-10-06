import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.main.primaryBlue,
          shadowColor: Colors.main.primaryBlue,
          borderTopColor: Colors.main.primaryBlue
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} isActive={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="charity"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"charity"} isActive={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"wallet"} isActive={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
