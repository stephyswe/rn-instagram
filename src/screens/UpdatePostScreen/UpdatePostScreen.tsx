import {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';

import colors from '../../theme/colors';

import {UpdatePostRouteProp} from '../../types/navigation';

import {getPost} from './queries';

import {GetPostQuery, GetPostQueryVariables} from '../../API';

import Button from '../../components/Button';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const UpdatePostScreen = () => {
  const [description, setDescription] = useState('');

  const route = useRoute<UpdatePostRouteProp>();
  const {id} = route.params;
  const {data, loading, error} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {variables: {id}},
  );

  const post = data?.getPost;

  useEffect(() => {
    if (post) {
      setDescription(post.description || '');
    }
  }, [post]);

  const submit = async () => {};

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Failed to fetch the post"
        message={error?.message}
      />
    );
  }

  return (
    <View style={styles.root}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description..."
        style={styles.input}
        placeholderTextColor={colors.grey}
        multiline
      />

      <Button text="Submit" onPress={submit} />
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

export default UpdatePostScreen;
