import {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';
import styles from './styles';

import {FeedNavigationProp} from '../../types/navigation';

import Comment from '../Comment';
import UserImage from '../UserImage';
import PostMenu from './PostMenu';
import Content from './Content';

import {Post} from '../../API';

import useLikeService from '../../services/LikeService';
import {storageGet} from '../../config/s3';

interface IFeedPost {
  post: Post;
  isVisible?: boolean;
}

const FeedPost = (props: IFeedPost) => {
  const {post, isVisible = false} = props;

  const navigation = useNavigation<FeedNavigationProp>();
  const {toggleLike, postLikes, isLiked} = useLikeService(post);

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    if (post.User?.image) {
      storageGet(post.User.image, setImageUri);
    }
  }, [post]);

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

  const navigateToLikes = () => {
    navigation.navigate('PostLikes', {id: post.id});
  };

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  return (
    <View style={styles.post}>
      {/* Header */}

      <View style={styles.header}>
        <UserImage imageKey={post.User?.image} />

        <Text onPress={navigateToUser} style={styles.userName}>
          {post.User?.username}
        </Text>
        <PostMenu post={post} />
      </View>

      {/* Content */}
      <Content post={post} isVisible={isVisible} toggleLike={toggleLike} />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
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
        {postLikes.length === 0 ? (
          <Text>Be the first to like the post</Text>
        ) : (
          <Text style={styles.text} onPress={navigateToLikes}>
            Liked by{' '}
            <Text style={styles.bold}>
              {post.Likes?.items[0]?.User?.username}
            </Text>
            {postLikes.length > 1 && (
              <>
                {' '}
                and <Text style={styles.bold}>{post.nofLikes - 1} others</Text>
              </>
            )}
          </Text>
        )}

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
        <Text style={styles.textBlack}>{dayjs(post.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
