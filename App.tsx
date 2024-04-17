import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';

import amplifyconfig from './src/amplifyconfiguration.json';

import Navigation from './src/navigation';

import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
};

export default App;
