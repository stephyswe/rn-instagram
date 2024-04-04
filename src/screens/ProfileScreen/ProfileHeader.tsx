import {View, Image, Text} from 'react-native';

import styles from './styles';

import user from '../../assets/data/user.json';

import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('On Edit Profile')}
        />
        <Button
          text="Another Button"
          onPress={() => console.warn('On Edit Profile')}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
