import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logo from '../assets/images/logo.png';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import {HomeStackNavigatorParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>(); // {  Navigator, Screen }

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40}}
    />
  );
};

export default HomeStackNavigator;
