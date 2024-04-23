import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';

import Client from './src/apollo/Client';

import amplifyconfig from './src/amplifyconfiguration.json';

import Navigation from './src/navigation';

import AuthContextProvider from './src/contexts/AuthContext';
import {MenuProvider} from 'react-native-popup-menu';

Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <AuthContextProvider>
          <Client>
            <Navigation />
          </Client>
        </AuthContextProvider>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
