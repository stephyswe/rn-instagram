/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';
import font from './src/theme/fonts';
import colors from './src/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.xlg}}>
        Hello World Test
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
};

export default App;
