import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Amplify } from 'aws-amplify';

import amplifyconfig from './src/amplifyconfiguration.json';

import Navigation from './src/navigation';

Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
