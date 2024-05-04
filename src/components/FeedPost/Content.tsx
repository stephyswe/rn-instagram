import {useEffect, useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

import Carousel from '../Carousel';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';

import styles from './styles';

import {Post} from '../../API';
import {storageGet} from '../../config/s3';

interface IContent {
  post: Post;
  isVisible: boolean;
  toggleLike: any;
}

const Content = ({post, isVisible, toggleLike}: IContent) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imagesUri, setImagesUri] = useState<string[] | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);

  useEffect(() => {
    downloadMedia();
  }, []);

  const downloadMedia = async () => {
    if (post.image) {
      if (post.image?.startsWith('http')) {
        return;
      }
      // download the image
      storageGet(post.image, setImageUri);
    } else if (post.images) {
      storageGet(post.images, setImagesUri);
    } else if (post.video) {
      storageGet(post.video, setVideoUri);
    }
  };

  if (imageUri) {
    return (
      <DoublePressable onDoublePress={toggleLike}>
        <Image source={{uri: imageUri}} style={styles.image} />
      </DoublePressable>
    );
  } else if (imagesUri) {
    return <Carousel images={imagesUri} onDoublePress={toggleLike} />;
  } else if (post.video) {
    return (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Content;
