import {ActivityIndicator, Text, View} from 'react-native';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';

import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '../contexts/AuthContext';

const Stack = createNativeStackNavigator<RootNavigatorParamList>(); // { Navigator, Screen }

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['notjustphotos://', 'https://notjustphotos.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      // notjustphotos://comments -> Comments Screen
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              // notjustphotos://user/123 -> User Screen with userId param
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  const {user, userId} = useAuthContext();

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>loading</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: true}}>
        {!user ? (
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={BottomTabNavigator}
              options={{headerShown: false}}
            />

            <Stack.Screen name="Comments" component={CommentsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
