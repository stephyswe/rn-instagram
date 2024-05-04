import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {signOut} from 'aws-amplify/auth';

import styles from './styles';

import Button from '../../components/Button';

import {ProfileNavigationProp} from '../../types/navigation';

import {User} from '../../API';
import {DEFAULT_USER_IMAGE} from '../../config';
import {useAuthContext} from '../../contexts/AuthContext';
import {useEffect, useState} from 'react';
import {storageGet} from '../../config/s3get';

interface IProfileHeader {
  user: User;
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const {userId} = useAuthContext();
  const navigation = useNavigation<ProfileNavigationProp>();

  useEffect(() => {
    navigation.setOptions({title: user?.username || 'Profile'});
  }, [user?.username]);

  useEffect(() => {
    if (user.image) {
      storageGet(user.image, setImageUri);
    }
  }, [user]);

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image
          source={{uri: imageUri || DEFAULT_USER_IMAGE}}
          style={styles.avatar}
        />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofPosts}</Text>
          <Text style={styles.textBlack}>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofFollowers}</Text>
          <Text style={styles.textBlack}>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofFollowings}</Text>
          <Text style={styles.textBlack}>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.textBlack}>{user.bio}</Text>

      {/* Button */}
      {userId === user.id && (
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
            inline
          />
          <Button text="SignOut" onPress={signOut} inline />
        </View>
      )}
    </View>
  );
};

export default ProfileHeader;
