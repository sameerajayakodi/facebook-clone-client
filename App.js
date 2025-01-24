import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FriendsScreen from './screens/FriendsScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import WatchScreen from './screens/WatchScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Login" component={Login} />
    //     <Tab.Screen name="Register" component={Register} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    //================================================================================================
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Friends':
                iconName = 'users';
                break;
              case 'Watch':
                iconName = 'play-circle';
                break;
              case 'Profile':
                iconName = 'user';
                break;
              case 'Notifications':
                iconName = 'bell';
                break;
              case 'Menu':
                iconName = 'bars';
                break;
              default:
                iconName = 'circle';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1877f2',
          tabBarInactiveTintColor: '#65676B',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Friends" component={FriendsScreen} />
        <Tab.Screen name="Watch" component={WatchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    //================================================================================================
    // <Post />
  );
};

// Your existing styles remain the same
const styles = StyleSheet.create({
  // ... existing styles
});

export default App;
