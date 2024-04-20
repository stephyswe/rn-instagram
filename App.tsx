import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';

import Client from './src/apollo/Client';

import amplifyconfig from './src/amplifyconfiguration.json';

import Navigation from './src/navigation';

import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Client>
          <Navigation />
        </Client>
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
