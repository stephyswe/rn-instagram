import {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';

import colors from '../../theme/colors';

import {
  CreateNavigationProp,
  UpdatePostRouteProp,
} from '../../types/navigation';

import {getPost, updatePost} from './queries';

import {
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from '../../API';

import Button from '../../components/Button';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const UpdatePostScreen = () => {
  const navigation = useNavigation<CreateNavigationProp>();

  const [description, setDescription] = useState('');

  const route = useRoute<UpdatePostRouteProp>();
  const {id} = route.params;
  const {data, loading, error} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {variables: {id}},
  );

  const post = data?.getPost;

  const [doUpdatePost, {error: updateError, data: updateData}] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  useEffect(() => {
    if (post) {
      setDescription(post.description || '');
    }
  }, [post]);

  useEffect(() => {
    if (updateData) {
      navigation.goBack();
    }
  }, [updateData, navigation]);

  const submit = async () => {
    if (!post) {
      return;
    }
    doUpdatePost({
      variables: {input: {id: post.id, description}},
    });
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error || updateError) {
    return (
      <ApiErrorMessage
        title="Failed to fetch the post"
        message={error?.message || updateError?.message}
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
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    color: colors.black,
  },
});

export default UpdatePostScreen;
