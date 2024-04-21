import {View, Text, StyleSheet, Image} from 'react-native';
import {signOut} from 'aws-amplify/auth';

import image from './error.png';
import colors from '../../theme/colors';
import Button from '../Button';

interface ApiErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  profileUser?: boolean;
}

const ApiErrorMessage = ({
  title = 'Error',
  message = 'Unknown Error',
  onRetry = () => {},
  profileUser,
}: ApiErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {profileUser ? <Button text="SignOut" onPress={signOut} /> : null}
      <Button text="Retry" onPress={onRetry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '70%',
    height: 200,
  },
  title: {
    fontSize: 18,
    margin: 20,
  },
  message: {
    color: colors.grey,
    marginBottom: 10,
  },
});

export default ApiErrorMessage;
