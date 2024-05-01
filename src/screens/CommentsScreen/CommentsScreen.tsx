import {useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useQuery, useSubscription} from '@apollo/client';

import Comment from '../../components/Comment';
import ApiErrorMessage from '../../components/ApiErrorMessage';

import Input from './Input';

import {CommentsRouteProp} from '../../types/navigation';

import {commentsByPost, onCreateCommentByPostId} from './queries';

import {
  CommentsByPostQuery,
  CommentsByPostQueryVariables,
  ModelSortDirection,
  OnCreateCommentByPostIdSubscription,
  OnCreateCommentByPostIdSubscriptionVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;
  const {userId} = useAuthContext();
  console.log('postId', postId, userId);

  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const {data, loading, error, refetch, fetchMore} = useQuery<
    CommentsByPostQuery,
    CommentsByPostQueryVariables
  >(commentsByPost, {
    variables: {
      postID: postId,
      sortDirection: ModelSortDirection.DESC,
      limit: 20,
    },
  });

  const {data: newCommentsData} = useSubscription<
    OnCreateCommentByPostIdSubscription,
    OnCreateCommentByPostIdSubscriptionVariables
  >(onCreateCommentByPostId, {
    variables: {
      postID: postId
    }
  });
  console.log('new Sub', newCommentsData);

  const nextToken = data?.commentsByPost?.nextToken;

  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }
    setIsFetchingMore(true);
    await fetchMore({variables: {nextToken}});
    setIsFetchingMore(false);
  };

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
        onEndReached={() => loadMore()}
      />
      <Input postId={postId} />
    </View>
  );
};

export default CommentsScreen;
