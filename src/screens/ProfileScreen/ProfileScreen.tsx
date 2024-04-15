import {useNavigation, useRoute} from '@react-navigation/native';

import user from '../../assets/data/user.json';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const userId = route.params?.userId;
  // query the user with userId

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
