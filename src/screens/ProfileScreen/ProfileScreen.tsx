import { useNavigation, useRoute } from '@react-navigation/native';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {user} = route.params;
  navigation.setOptions({title: user.username})

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
