import {useRef, useState} from 'react';
import {
  FlatList,
  ViewToken,
  ViewabilityConfig,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from '@apollo/client';

import FeedPost from '../../components/FeedPost';
import ApiErrorMessage from '../../components/ApiErrorMessage';

import {listPosts} from './queries';

import {ListPostsQuery, ListPostsQueryVariables} from '../../API';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const {data, loading, error, refetch} = useQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts, {
    variables: {
      limit: 10,
    },
  });

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fetching posts" message={error.message} />
    );
  }

  const posts = data?.listPosts?.items || [];

  return (
    <FlatList
      data={posts}
      renderItem={({item}) =>
        item && <FeedPost isVisible={item.id === activePostId} post={item} />
      }
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
      onRefresh={() => refetch()}
      refreshing={loading}
    />
  );
};

export default HomeScreen;
