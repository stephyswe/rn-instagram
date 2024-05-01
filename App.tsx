import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import Client from './src/apollo/Client';

import amplifyconfig from './src/amplifyconfiguration.json';

import Navigation from './src/navigation';

import AuthContextProvider from './src/contexts/AuthContext';
import {MenuProvider} from 'react-native-popup-menu';

dayjs.extend(relativeTime);

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
