import {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {signIn} from 'aws-amplify/auth';

import Logo from '../../../assets/images/logo.png';

import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';

import {SignInNavigationProp} from '../../../types/navigation';

type SignInData = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation<SignInNavigationProp>();
  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, reset} = useForm<SignInData>();

  const onSignInPressed = async ({email, password}: SignInData) => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const {isSignedIn, nextStep} = await signIn({
        username: email,
        password,
      });

      if (!isSignedIn && nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        navigation.navigate('Confirm email', {email});
      }
    } catch (error) {
      Alert.alert('Oopps', (error as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('Sign up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <FormInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{required: 'Email is required'}}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />

        <CustomButton
          text="Confirm Account"
          onPress={() =>
            navigation.navigate('Confirm email', {
              email: 'devgonnadev@gmail.com',
            })
          }
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
