import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';

import Comment from '../../components/Comment';
import ApiErrorMessage from '../../components/ApiErrorMessage';

import Input from './Input';

import {CommentsRouteProp} from '../../types/navigation';

import {commentsByPost} from './queries';

import {
  CommentsByPostQuery,
  CommentsByPostQueryVariables,
  ModelSortDirection,
} from '../../API';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;

  const {data, loading, error, refetch} = useQuery<
    CommentsByPostQuery,
    CommentsByPostQueryVariables
  >(commentsByPost, {
    variables: {
      postID: postId,
      sortDirection: ModelSortDirection.DESC,
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching comments"
        message={error.message}
      />
    );
  }

  const comments = data?.commentsByPost?.items || [];

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment item={item} includeDetails />}
        style={{padding: 10}}
        inverted
        ListEmptyComponent={() => (
          <Text>No comments. Be the first comment</Text>
        )}
        refreshing={loading}
        onRefresh={refetch}
      />
      <Input postId={postId} />
    </View>
  );
};

export default CommentsScreen;
