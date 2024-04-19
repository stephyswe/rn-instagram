import {useRef, useState, useEffect} from 'react';
import {FlatList, ViewToken, ViewabilityConfig} from 'react-native';
import {generateClient} from 'aws-amplify/api';

import FeedPost from '../../components/FeedPost';

export const listPosts = /* GraphQL */ `
query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      createdAt
      updatedAt
      __typename
      User {
        id
        name
        username
        image
      }
      Comments {
        items {
          id
          comment
          User {
            id
            name
            username
          }
        }
      }
    }
    nextToken
    __typename
  }
}`;

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [posts, setPosts] = useState([]);

  const client = generateClient();

  const fetchPosts = async () => {
    const response = await client.graphql({query: listPosts});
    setPosts(response.data.listPosts.items);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <FeedPost isVisible={item.id === activePostId} post={item} />
      )}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
