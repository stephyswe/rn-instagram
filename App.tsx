import {StyleSheet, View} from 'react-native';

import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
