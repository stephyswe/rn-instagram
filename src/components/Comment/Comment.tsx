import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import dayjs from 'dayjs';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

import {Comment as CommentType} from '../../API';

import UserImage from '../UserImage';

interface ICommentProps {
  item: CommentType;
  includeDetails?: boolean;
  isNew?: boolean;
}

const Comment = ({
  item,
  includeDetails = false,
  isNew = false,
}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && <UserImage imageKey={item.User?.image} width={40} />}

      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{item.User?.username}</Text> {item.comment}
        </Text>

        {includeDetails && (
          <View style={styles.footer}>
            {isNew && <Text style={styles.new}>new</Text>}
            <Text style={styles.footerText}>
              {dayjs(item.createdAt).fromNow()}
            </Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleColumn: {
    flex: 1,
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
  },
  icon: {
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
  new: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingHorizontal: 5,
    marginRight: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default Comment;
