import {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet, Alert} from 'react-native';
import {useMutation} from '@apollo/client';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

import {useAuthContext} from '../../contexts/AuthContext';

import {CreateCommentMutation, CreateCommentMutationVariables} from '../../API';

import {createComment} from './queries';

interface IInput {
  postId: string;
}

const Input = ({postId}: IInput) => {
  const {userId} = useAuthContext();

  const [newComment, setNewComment] = useState('');

  const [doCreateComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment);

  const onPost = async () => {
    try {
      await doCreateComment({
        variables: {
          input: {
            postID: postId,
            userID: userId,
            comment: newComment,
          },
        },
      });
    } catch (e) {
      Alert.alert('Error submitting an comment', (e as Error).message);
    }

    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Write your comment..."
        style={styles.input}
        multiline
      />

      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,

    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,

    paddingVertical: 5,
    paddingRight: 50,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});

export default Input;
