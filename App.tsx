import {StyleSheet, ScrollView} from 'react-native';
import FeedPost from './src/components/FeedPost/FeedPost';
FeedPost;

const post = {
  id: 'video',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  video:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: 'u1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'random_user',
  },
  nofComments: 11,
  nofLikes: 34,
  comments: [
    {
      id: '1',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'anotheruser',
      },
    },
  ],
};

const post1 = {
  id: 'video',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
  video:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: 'u1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'random_user',
  },
  nofComments: 11,
  nofLikes: 34,
  comments: [
    {
      id: '1',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'anotheruser',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
      <FeedPost post={post1} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
