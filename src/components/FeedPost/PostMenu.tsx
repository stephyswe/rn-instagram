import {Alert, StyleSheet, Text} from 'react-native';
import {
  renderers,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';

import Entypo from 'react-native-vector-icons/Entypo';

const PostMenu = () => {
  return (
    <Menu renderer={renderers.SlideInMenu} style={styles.threeDots}>
      <MenuTrigger>
        <Entypo name="dots-three-horizontal" size={16} />
      </MenuTrigger>

      <MenuOptions>
        <MenuOption onSelect={() => Alert.alert('Reporting')}>
          <Text style={styles.optionText}>Report</Text>
        </MenuOption>
        <>
          <MenuOption onSelect={() => {}}>
            <Text style={[styles.optionText, {color: 'red'}]}>Delete</Text>
          </MenuOption>
          <MenuOption onSelect={() => {}}>
            <Text style={styles.optionText}>Edit</Text>
          </MenuOption>
        </>
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  threeDots: {
    marginLeft: 'auto',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});

export default PostMenu;
