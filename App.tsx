import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';
import {
  Authenticator,
  Theme,
  ThemeProvider,
} from '@aws-amplify/ui-react-native';

import amplifyconfig from './src/amplifyconfiguration.json';

import Navigation from './src/navigation';
import {View, Text} from 'react-native';

Amplify.configure(amplifyconfig);

const theme: Theme = {
  tokens: {
    colors: {
      font: {
        primary: 'gray',
      },
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator.Provider>
        <Authenticator
          // render override SignIn subcomponent
          components={{
            ForgotPassword: ({fields, ...props}) => (
              <Authenticator.ForgotPassword
                {...props}
                fields={fields.map(field => ({...field, labelHidden: true}))}
              />
            ),
            SignIn: ({fields, ...props}) => (
              <Authenticator.SignIn
                {...props}
                fields={fields.map(field => ({...field, labelHidden: true}))}
              />
            ),
            SignUp: ({fields, ...props}) => (
              <Authenticator.SignUp
                {...props}
                fields={fields.map(field => ({...field, labelHidden: true}))}
              />
            ),
          }}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </Authenticator>
      </Authenticator.Provider>
    </ThemeProvider>
  );
};

export default App;
