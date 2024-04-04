import {View, FlatList} from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';

const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment item={item} includeDetails />}
        style={{padding: 10}}
      />
    </View>
  );
};

export default CommentsScreen;
