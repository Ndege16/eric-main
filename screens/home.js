import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    // <Tab.Navigator
    //   initialRouteName="Feed"
    //   screenOptions={{
    //     tabBarActiveTintColor: '#e91e63',
    //   }}
    // >
    //   <Tab.Screen
    //     name="Feed"
    //     component={Feed}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Notifications"
    //     component={Notifications}
    //     options={{
    //       tabBarLabel: 'Updates',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="bell" color={color} size={size} />
    //       ),
    //       tabBarBadge: 3,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={Profile}
    //     options={{
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
    <View>
      <Text>Home</Text>
    </View>
  );
}