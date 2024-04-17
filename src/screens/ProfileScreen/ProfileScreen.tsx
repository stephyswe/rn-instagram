import {useNavigation, useRoute} from '@react-navigation/native';

import user from '../../assets/data/user.json';

import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
} from '../../types/navigation';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route.params?.userId;
  // query the user with userId
  console.warn('userId', userId);

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
