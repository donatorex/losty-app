import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router/js-tabs';
import type { BottomTabBarButtonProps } from 'expo-router/js-tabs';
import { Pressable, StyleSheet } from 'react-native';

import { colors, radii } from '@/theme/tokens';

function CreateTabButton({ onPress, accessibilityState }: BottomTabBarButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Создать"
      accessibilityState={accessibilityState}
      onPress={onPress}
      style={({ pressed }) => [styles.createButton, pressed && styles.createButtonPressed]}
    >
      <SymbolView name="plus" tintColor={colors.overlay} size={22} />
    </Pressable>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Карта',
          tabBarIcon: ({ color, size }) => <SymbolView name="map" tintColor={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Поиск',
          tabBarIcon: ({ color, size }) => (
            <SymbolView name="magnifyingglass" tintColor={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Создать',
          tabBarButton: (props) => <CreateTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Директ',
          tabBarIcon: ({ color, size }) => (
            <SymbolView name="bubble.left.and.bubble.right" tintColor={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color, size }) => (
            <SymbolView name="person.crop.circle" tintColor={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  createButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    marginTop: -12,
    borderRadius: radii.pill,
    backgroundColor: colors.text,
  },
  createButtonPressed: {
    opacity: 0.8,
  },
});
