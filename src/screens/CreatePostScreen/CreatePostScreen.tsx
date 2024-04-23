import {useState} from 'react';
import {View, TextInput, Image, StyleSheet, Alert} from 'react-native';

import colors from '../../theme/colors';

import {useRoute} from '@react-navigation/native';

import {CreateRouteProp} from '../../types/navigation';

import Button from '../../components/Button';
import {createPost} from './queries';
import {CreatePostMutation, CreatePostMutationVariables} from '../../API';
import {useMutation} from '@apollo/client';
import {useAuthContext} from '../../contexts/AuthContext';

const CreatePostScreen = () => {
  const {userId} = useAuthContext();

  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [doCreatePost] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(createPost);

  const route = useRoute<CreateRouteProp>();
  const image =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';
  // TODO: const {image} = route.params;

  const submit = async () => {
    try {
      const response = await doCreatePost({
        variables: {
          input: {
            description,
            image,
            nofComments: 0,
            nofLikes: 0,
            userID: userId,
          },
        },
      });

      console.log(response);
    } catch (e) {
      Alert.alert('Error uploading the post', (e as Error).message);
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
        resizeMode={'contain'}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description..."
        style={styles.input}
        placeholderTextColor={colors.grey}
        multiline
      />

      <Button
        text={isSubmitting ? 'Submitting...' : 'Submit'}
        onPress={submit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    aspectRatio: 1,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    color: colors.black,
  },
  content: {
    width: '100%',
    aspectRatio: 1,
  },
  progressContainer: {
    backgroundColor: colors.lightgrey,
    width: '100%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  progress: {
    backgroundColor: colors.primary,
    position: 'absolute',
    height: '100%',
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
});

export default CreatePostScreen;
