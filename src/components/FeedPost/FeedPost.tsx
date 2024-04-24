import {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@apollo/client';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';
import styles from './styles';

import {FeedNavigationProp} from '../../types/navigation';

import Comment from '../Comment';
import Carousel from '../Carousel';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';
import PostMenu from './PostMenu';

import {createLike, likesForPostByUser} from './queries';
import {
  CreateLikeMutation,
  CreateLikeMutationVariables,
  LikesForPostByUserQuery,
  LikesForPostByUserQueryVariables,
  Post,
} from '../../API';

import {DEFAULT_USER_IMAGE} from '../../config';

import {useAuthContext} from '../../contexts/AuthContext';

interface IFeedPost {
  post: Post;
  isVisible?: boolean;
}

const FeedPost = (props: IFeedPost) => {
  const {post, isVisible = false} = props;

  const navigation = useNavigation<FeedNavigationProp>();
  const {userId} = useAuthContext();

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const {data: usersLikeData} = useQuery<
    LikesForPostByUserQuery,
    LikesForPostByUserQueryVariables
  >(likesForPostByUser, {
    variables: {
      postID: post.id,
      userID: {eq: userId},
    },
  });

  const [doCreateLike] = useMutation<
    CreateLikeMutation,
    CreateLikeMutationVariables
  >(createLike, {
    variables: {input: {userID: userId, postID: post.id}},
    refetchQueries: ['LikesForPostByUser'],
  });

  console.log(usersLikeData);
  const userLike = usersLikeData?.likesForPostByUser?.items?.[0];

  const navigateToUser = () => {
    // navigate
    if (post.User) {
      navigation.navigate('UserProfile', {
        userId: post.User.id,
      });
    }
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = async () => {
    console.warn('toogleLike');
    const response = await doCreateLike();
    console.log('createLike', response);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <View style={styles.post}>
      {/* Header */}

      <View style={styles.header}>
        <Image
          source={{
            uri: post.User?.image || DEFAULT_USER_IMAGE,
          }}
          style={styles.userAvatar}
        />
        <Text onPress={navigateToUser} style={styles.userName}>
          {post.User?.username}
        </Text>
        <PostMenu post={post} />
      </View>

      {/* Content */}
      {content}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={userLike ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={userLike ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>lgrine</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.User?.username}</Text>{' '}
          {post.description}
        </Text>
        <Text style={styles.textBlack} onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* Comments */}
        <Text style={styles.textBlack} onPress={navigateToComments}>
          View all {post.nofComments} comments
        </Text>
        {(post.Comments?.items || [])?.map(
          comment => comment && <Comment key={comment.id} item={comment} />,
        )}

        {/* Posted date */}
        <Text style={styles.textBlack}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
