import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/home_screen'
import SettingsScreen from './src/settings_screen'
import ScanQrScreen from './src/scan_qr_screen'

const Tab = createBottomTabNavigator()
const { width } = Dimensions.get('window')



function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (index === 1) {
          return (
            <TouchableOpacity
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ justifyContent: 'center', alignItems: 'center', height: 60, width: 60, backgroundColor: '#ff9f43', position: 'absolute', left: (width / 2) - 30, bottom: 30, borderRadius: 30, zIndex: 99 }}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                SCAN
            </Text>
            </TouchableOpacity>
          )
        }

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 56, backgroundColor: '#2e86de' }}
          >
            <Text style={{ color: isFocused ? 'white' : '#48dbfb' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="QR"
          component={ScanQrScreen}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
